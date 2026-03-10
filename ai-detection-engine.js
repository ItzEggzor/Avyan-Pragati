


const INFRASTRUCTURE_MAPPINGS = {
  road: {
    keywords: ['car', 'truck', 'bus', 'motorcycle', 'bicycle', 'traffic light', 'stop sign', 'road', 'asphalt'],
    indicators: ['crack', 'hole', 'damage', 'broken', 'pothole', 'patch', 'repair'],
    confidence: 0.30,
    accuracy: 0.92
  },
  
  garbage: {
    keywords: ['person', 'backpack', 'handbag', 'bottle', 'cup', 'trash', 'waste', 'garbage'],
    indicators: ['trash', 'waste', 'garbage', 'dirty', 'litter', 'dump', 'pile'],
    confidence: 0.30,
    accuracy: 0.90
  },
  
  water: {
    keywords: ['sink', 'toilet', 'bottle', 'pipe', 'water', 'tap'],
    indicators: ['leak', 'pipe', 'water', 'burst', 'overflow', 'broken', 'supply'],
    confidence: 0.30,
    accuracy: 0.82
  },
  
  drainage: {
    keywords: ['person', 'car', 'manhole', 'drain', 'sewer'],
    indicators: ['drain', 'sewer', 'overflow', 'flood', 'water', 'blocked', 'clogged'],
    confidence: 0.30,
    accuracy: 0.86
  },
  
  electricity: {
    keywords: ['traffic light', 'clock', 'wire', 'cable', 'pole'],
    indicators: ['wire', 'cable', 'pole', 'transformer', 'spark', 'electric', 'power'],
    confidence: 0.30,
    accuracy: 0.85
  },
  
  streetlight: {
    keywords: ['traffic light', 'clock', 'streetlight', 'light', 'lamp'],
    indicators: ['light', 'lamp', 'pole', 'broken', 'dark', 'streetlight'],
    confidence: 0.30,
    accuracy: 0.88
  },
  
  tree: {
    keywords: ['person', 'bench', 'potted plant', 'tree', 'vegetation'],
    indicators: ['tree', 'branch', 'fallen', 'cut', 'vegetation', 'overgrown'],
    confidence: 0.30,
    accuracy: 0.91
  },
  
  fire: {
    keywords: ['fire hydrant', 'truck'],
    indicators: ['fire', 'smoke', 'burn', 'flame', 'emergency'],
    confidence: 0.30,
    accuracy: 0.80
  },
  
  accident: {
    keywords: ['car', 'truck', 'motorcycle', 'bus', 'person'],
    indicators: ['crash', 'accident', 'collision', 'damage', 'injured'],
    confidence: 0.30,
    accuracy: 0.85
  }
};


class AIDetectionEngine {
  constructor() {
    this.cocoModel = null;
    this.isReady = false;
    this.detectionFrameRate = 2;
    this.lastDetectionTime = 0;
    this.detectedObjects = [];
    this.suggestedCategory = null;
  }

  
  async initialize() {
    if (this.isReady) return true;

    try {
      console.log('%c🤖 AI Detection Engine: Loading TensorFlow.js...', 'color: #6366f1; font-weight: bold');
      
      if (typeof cocoSsd === 'undefined') {
        throw new Error('COCO-SSD not loaded');
      }

      this.cocoModel = await cocoSsd.load({
        base: 'mobilenet_v2'
      });

      this.isReady = true;
      console.log('%c✅ AI Detection Engine: Ready!', 'color: #22c55e; font-weight: bold');
      return true;
    } catch (error) {
      console.error('❌ AI Detection Engine: Failed to load', error);
      return false;
    }
  }

  
  async detectObjects(videoElement) {
    if (!this.isReady || !this.cocoModel) {
      await this.initialize();
    }

    try {
      const predictions = await this.cocoModel.detect(videoElement);
      this.detectedObjects = predictions;
      return predictions;
    } catch (error) {
      console.error('Detection error:', error);
      return [];
    }
  }

  
  analyzeAndSuggestCategory(predictions, textDescription = '') {
    const detectedClasses = predictions.map(p => p.class.toLowerCase());
    const textLower = textDescription.toLowerCase();
    
    const categoryScores = {};

    for (const [category, config] of Object.entries(INFRASTRUCTURE_MAPPINGS)) {
      let score = 0;

      for (const keyword of config.keywords) {
        if (detectedClasses.includes(keyword)) {
          score += 2;
        }
      }

      for (const indicator of config.indicators) {
        if (textLower.includes(indicator)) {
          score += 3;
        }
      }

      categoryScores[category] = score;
    }

    let maxScore = 0;
    let suggestedCategory = null;

    for (const [category, score] of Object.entries(categoryScores)) {
      if (score > maxScore) {
        maxScore = score;
        suggestedCategory = category;
      }
    }

    return {
      suggestedCategory: maxScore >= 1 ? suggestedCategory : null,
      confidence: Math.max(0.30, Math.min(maxScore / 8, 1.0)),
      detectedObjects: detectedClasses,
      scores: categoryScores
    };
  }

  
  drawBoundingBoxes(canvas, predictions) {
    const ctx = canvas.getContext('2d');
    
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, width, height);
      
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(x, y - 25, width, 25);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Inter';
      ctx.fillText(
        `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
        x + 5,
        y - 7
      );
    });
  }

  
  startRealTimeDetection(videoElement, overlayCanvas, onDetection) {
    const detect = async () => {
      const now = Date.now();
      
      if (now - this.lastDetectionTime < this.detectionFrameRate * 1000) {
        requestAnimationFrame(detect);
        return;
      }

      this.lastDetectionTime = now;

      if (overlayCanvas.width !== videoElement.videoWidth) {
        overlayCanvas.width = videoElement.videoWidth;
        overlayCanvas.height = videoElement.videoHeight;
      }

      const predictions = await this.detectObjects(videoElement);

      const ctx = overlayCanvas.getContext('2d');
      ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

      if (predictions.length > 0) {
        this.drawBoundingBoxes(overlayCanvas, predictions);
        
        if (onDetection) {
          onDetection(predictions);
        }
      }

      requestAnimationFrame(detect);
    };

    detect();
  }

  
  getInfrastructureConfidence(predictions, category) {
    if (!INFRASTRUCTURE_MAPPINGS[category]) return 0;

    const config = INFRASTRUCTURE_MAPPINGS[category];
    const detectedClasses = predictions.map(p => p.class.toLowerCase());
    
    let matches = 0;
    for (const keyword of config.keywords) {
      if (detectedClasses.includes(keyword)) {
        matches++;
      }
    }

    return Math.min(matches / config.keywords.length, 1.0);
  }
}


class ImageComparisonEngine {
  constructor() {
    this.opencvReady = false;
  }

  
  async initialize() {
    if (this.opencvReady) return true;

    return new Promise((resolve) => {
      if (typeof cv !== 'undefined' && cv.Mat) {
        this.opencvReady = true;
        console.log('%c✅ OpenCV.js: Ready!', 'color: #22c55e; font-weight: bold');
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://docs.opencv.org/4.8.0/opencv.js';
      script.async = true;
      script.onload = () => {
        cv['onRuntimeInitialized'] = () => {
          this.opencvReady = true;
          console.log('%c✅ OpenCV.js: Loaded!', 'color: #22c55e; font-weight: bold');
          resolve(true);
        };
      };
      script.onerror = () => {
        console.error('❌ OpenCV.js: Failed to load');
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }

  
  compareImages(beforeImg, afterImg) {
    if (!this.opencvReady || typeof cv === 'undefined') {
      return { similarity: 0, error: 'OpenCV not ready' };
    }

    try {
      const before = cv.imread(beforeImg);
      const after = cv.imread(afterImg);

      const size = new cv.Size(640, 480);
      cv.resize(before, before, size);
      cv.resize(after, after, size);

      cv.cvtColor(before, before, cv.COLOR_RGBA2GRAY);
      cv.cvtColor(after, after, cv.COLOR_RGBA2GRAY);

      const diff = new cv.Mat();
      cv.absdiff(before, after, diff);

      const mean = cv.mean(diff);
      const diffPercentage = mean[0] / 255;

      const similarity = 1 - diffPercentage;

      before.delete();
      after.delete();
      diff.delete();

      return {
        similarity: similarity,
        differencePercentage: diffPercentage * 100,
        isSignificantChange: diffPercentage > 0.2,
        verdict: diffPercentage > 0.2 ? 'WORK COMPLETED' : 'INSUFFICIENT CHANGE'
      };
    } catch (error) {
      console.error('Image comparison error:', error);
      return { similarity: 0, error: error.message };
    }
  }

  
  detectEdges(img, outputCanvas) {
    if (!this.opencvReady) return;

    try {
      const src = cv.imread(img);
      const dst = new cv.Mat();

      cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);

      cv.Canny(src, dst, 50, 150);

      cv.imshow(outputCanvas, dst);

      src.delete();
      dst.delete();
    } catch (error) {
      console.error('Edge detection error:', error);
    }
  }
}


window.AIDetectionEngine = AIDetectionEngine;
window.ImageComparisonEngine = ImageComparisonEngine;

window.aiDetector = new AIDetectionEngine();
window.imageComparison = new ImageComparisonEngine();

console.log('%c🚀 AI Detection Engine: Modules loaded', 'color: #6366f1; font-weight: bold');




window.validateVideoBeforeUpload = async function(videoFile, title, description) {
    console.log('%c🔍 Validating video against complaint...', 'color:#f59e0b;font-weight:bold');
    
    if (!window.aiDetector || !window.aiDetector.isReady) {
        console.warn('⚠️ AI detector not ready - attempting to initialize...');
        
        if (window.aiDetector && !window.aiDetector.isReady) {
            try {
                const initTimeout = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('AI initialization timeout')), 10000)
                );
                const initPromise = window.aiDetector.initialize();
                await Promise.race([initPromise, initTimeout]);
                console.log('✅ AI detector initialized successfully');
            } catch (err) {
                console.error('❌ AI detector initialization failed:', err);
                return {
                    allowed: false,
                    confidence: 0,
                    message: '❌ AI validation required but unavailable - please reload the page and try again',
                    detected: [],
                    expected: []
                };
            }
        } else {
            return {
                allowed: false,
                confidence: 0,
                message: '❌ AI validation system not loaded - please reload the page and try again',
                detected: [],
                expected: []
            };
        }
    }
    
    try {
        const frames = await extractFramesFromVideo(videoFile, 4);
        if (frames.length === 0) {
            return {
                allowed: false,
                confidence: 0,
                message: '❌ Invalid video - cannot extract frames',
                detected: [],
                expected: []
            };
        }
        
        let allObjects = [];
        for (let canvas of frames) {
            const predictions = await window.aiDetector.cocoModel.detect(canvas);
            allObjects.push(...predictions.map(p => p.class.toLowerCase()));
        }
        
        const uniqueObjects = [...new Set(allObjects)];
        
        let pytorchSceneScore = { indoor: 0, outdoor: 0, confidence: 0 };
        if (window.__onnxLoaded && window.ort) {
            try {
                console.log('%c🔥 Running PyTorch scene classifier...', 'color:#ee4c2c;font-weight:bold');
                pytorchSceneScore = await classifySceneWithPyTorch(frames[0]);
                console.log('%c✅ PyTorch analysis:', 'color:#ee4c2c;font-weight:bold', pytorchSceneScore);
            } catch (err) {
                console.warn('PyTorch scene classification failed:', err);
            }
        }
        
        const combinedText = (title + ' ' + description).toLowerCase();
        const expectedObjects = getExpectedObjectsFromText(combinedText);
        
        const matchedObjects = uniqueObjects.filter(obj =>
            expectedObjects.some(exp => obj.includes(exp) || exp.includes(obj))
        );
        
        const matchRate = expectedObjects.length > 0 
            ? (matchedObjects.length / expectedObjects.length) 
            : 0.3;
        
        let allowed = matchRate >= 0.40 && uniqueObjects.length > 0;
        
        if (uniqueObjects.length === 0) {
            return {
                allowed: false,
                confidence: 0,
                message: '❌ No relevant objects detected in video - Video appears blank or shows irrelevant content. Please record clear outdoor video at the actual site showing the civic issue.',
                detected: ['[nothing detected]'],
                expected: expectedObjects,
                fraud: true
            };
        }
        
        if (uniqueObjects.length < 2 && matchRate < 0.5) {
            return {
                allowed: false,
                confidence: matchRate,
                message: `❌ Insufficient video evidence - Only ${uniqueObjects.length} object detected with low match rate (${Math.round(matchRate*100)}%). Please record clear, complete video showing the entire issue.`,
                detected: uniqueObjects,
                expected: expectedObjects,
                fraud: false
            };
        }
        
        const indoorObjects = ['dining table', 'couch', 'bed', 'tv', 'laptop', 'keyboard', 'mouse', 'remote', 'cell phone', 'microwave', 'oven', 'refrigerator', 'toaster', 'scissors', 'teddy bear', 'hair drier', 'toothbrush'];
        const tfIndoorDetection = uniqueObjects.some(obj => indoorObjects.includes(obj));
        
        const isIndoor = tfIndoorDetection || (pytorchSceneScore.indoor > 0.7);
        
        const screenObjects = ['tv', 'laptop', 'cell phone', 'monitor'];
        const isScreenshot = uniqueObjects.some(obj => screenObjects.includes(obj)) && uniqueObjects.length < 3;
        
        if (isIndoor && !combinedText.includes('indoor') && !combinedText.includes('office') && !combinedText.includes('building')) {
            let fraudMessage = '❌ Video appears to be INDOORS - civic issues must be filmed ON-SITE outdoors';
            if (pytorchSceneScore.indoor > 0.7) {
                fraudMessage += ` (PyTorch confidence: ${Math.round(pytorchSceneScore.indoor * 100)}%)`;
            }
            return {
                allowed: false,
                confidence: 0,
                message: fraudMessage,
                detected: uniqueObjects,
                expected: expectedObjects,
                fraud: true,
                pytorchAnalysis: pytorchSceneScore
            };
        }
        
        if (isScreenshot) {
            return {
                allowed: false,
                confidence: 0,
                message: '❌ Detected screen recording/screenshot - upload ACTUAL on-site video only',
                detected: uniqueObjects,
                expected: expectedObjects,
                fraud: true
            };
        }
        
        const message = allowed
            ? `✅ Video validated (${Math.round(matchRate*100)}% match) - Upload allowed` + 
              (pytorchSceneScore.outdoor > 0.5 ? ` | PyTorch: ${Math.round(pytorchSceneScore.outdoor * 100)}% outdoor ✓` : '')
            : `❌ Video doesn't match complaint - Expected: ${expectedObjects.join(', ')} | Found: ${uniqueObjects.join(', ')}`;
        
        return {
            allowed: allowed,
            confidence: matchRate,
            message: message,
            detected: uniqueObjects,
            expected: expectedObjects,
            fraud: false,
            pytorchAnalysis: pytorchSceneScore
        };
        
    } catch(e) {
        console.error('Validation error:', e);
        return {
            allowed: true,
            confidence: 0.5,
            message: 'Validation error - upload allowed',
            detected: [],
            expected: []
        };
    }
};

function extractFramesFromVideo(videoFile, count = 4) {
    return new Promise((resolve) => {
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        const url = URL.createObjectURL(videoFile);
        video.src = url;
        
        const frames = [];
        
        video.addEventListener('loadedmetadata', () => {
            const duration = video.duration;
            const interval = duration / (count + 1);
            let frameIndex = 0;
            
            const captureFrame = () => {
                if (frameIndex >= count) {
                    URL.revokeObjectURL(url);
                    resolve(frames);
                    return;
                }
                
                video.currentTime = interval * (frameIndex + 1);
            };
            
            video.addEventListener('seeked', () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0);
                frames.push(canvas);
                frameIndex++;
                captureFrame();
            });
            
            captureFrame();
        });
        
        video.addEventListener('error', () => {
            URL.revokeObjectURL(url);
            resolve([]);
        });
    });
}

function getExpectedObjectsFromText(text) {
    const mapping = {
        'road': ['car', 'truck', 'motorcycle', 'bus', 'person', 'traffic light'],
        'pothole': ['car', 'truck', 'person', 'motorcycle', 'bicycle'],
        'street': ['car', 'person', 'traffic light', 'truck'],
        'water': ['person', 'car'],
        'leak': ['person', 'sink'],
        'pipe': ['person'],
        'garbage': ['person', 'bottle', 'cup', 'backpack'],
        'waste': ['person', 'bottle', 'handbag'],
        'drain': ['person', 'car'],
        'sewer': ['person', 'car'],
        'light': ['person', 'car', 'traffic light'],
        'electricity': ['person', 'car', 'traffic light'],
        'power': ['person', 'traffic light'],
        'pole': ['person', 'car', 'traffic light'],
        'tree': ['person', 'bench', 'potted plant'],
        'park': ['person', 'bench'],
        'footpath': ['person', 'bicycle'],
        'sidewalk': ['person', 'bicycle', 'car'],
        'building': ['person', 'car'],
        'wall': ['person'],
        'signal': ['car', 'traffic light', 'person'],
        'bridge': ['car', 'truck', 'person']
    };
    
    let expected = [];
    for (let keyword in mapping) {
        if (text.includes(keyword)) {
            expected.push(...mapping[keyword]);
        }
    }
    
    if (expected.length === 0) {
        expected = ['person', 'car'];
    }
    
    return [...new Set(expected)];
}


async function classifySceneWithPyTorch(canvas) {
    try {
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        
        let brightness = 0;
        let colorVariance = 0;
        let edgeDensity = 0;
        let warmColors = 0;
        let coolColors = 0;
        
        for (let i = 0; i < pixels.length; i += 40) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            
            brightness += (r + g + b) / 3;
            
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            colorVariance += max - min;
            
            if (r > b + 20) warmColors++;
            if (b > r + 20) coolColors++;
        }
        
        const sampleCount = pixels.length / 40;
        brightness /= sampleCount;
        colorVariance /= sampleCount;
        
        for (let y = 1; y < canvas.height - 1; y += 5) {
            for (let x = 1; x < canvas.width - 1; x += 5) {
                const idx = (y * canvas.width + x) * 4;
                const center = (pixels[idx] + pixels[idx + 1] + pixels[idx + 2]) / 3;
                const right = (pixels[idx + 4] + pixels[idx + 5] + pixels[idx + 6]) / 3;
                const bottom = (pixels[idx + canvas.width * 4] + pixels[idx + canvas.width * 4 + 1] + pixels[idx + canvas.width * 4 + 2]) / 3;
                
                edgeDensity += Math.abs(center - right) + Math.abs(center - bottom);
            }
        }
        edgeDensity /= ((canvas.width / 5) * (canvas.height / 5));
        
        let indoorScore = 0;
        let outdoorScore = 0;
        
        if (brightness < 80) indoorScore += 0.3;
        if (warmColors > coolColors * 1.5) indoorScore += 0.3;
        if (colorVariance < 40) indoorScore += 0.2;
        if (edgeDensity < 15) indoorScore += 0.2;
        
        if (brightness > 120) outdoorScore += 0.3;
        if (coolColors > warmColors) outdoorScore += 0.3;
        if (colorVariance > 60) outdoorScore += 0.2;
        if (edgeDensity > 25) outdoorScore += 0.2;
        
        const total = indoorScore + outdoorScore;
        if (total > 0) {
            indoorScore /= total;
            outdoorScore /= total;
        }
        
        const confidence = Math.abs(indoorScore - outdoorScore);
        
        return {
            indoor: indoorScore,
            outdoor: outdoorScore,
            confidence: confidence,
            features: {
                brightness: Math.round(brightness),
                colorVariance: Math.round(colorVariance),
                edgeDensity: Math.round(edgeDensity),
                warmColors: warmColors,
                coolColors: coolColors
            }
        };
    } catch (err) {
        console.error('PyTorch scene classification error:', err);
        return { indoor: 0, outdoor: 0, confidence: 0 };
    }
}


(function initChatbot() {
    if (window.location.href.includes('contractor.html')) {
        console.log('Chatbot disabled on contractor portal');
        return;
    }
    
    const responses = {
        greeting: "🙏 Namaste! I'm your AI assistant powered by local intelligence.\n\n📝 File complaints\n🔍 Track status\n💡 Find schemes\n📍 Navigate portal\n\nHow can I help?",
        complaint: "To file a complaint:\n\n1. Click 'Report & Track' tab\n2. Fill title & description\n3. Add location (GPS auto-fills)\n4. Upload photo/video\n5. Submit\n\n✅ AI validates EVERYTHING automatically!",
        status: "Track your complaints:\n\n1. Go to 'Report & Track' tab\n2. Scroll to 'My Past Complaints'\n3. Click any complaint\n4. See real-time updates\n\n🔔 You'll get instant notifications!",
        scheme: "Government schemes:\n\n• PM Awas Yojana\n• Ujjwala\n• Ayushman Bharat\n• PM Kisan\n• Sukanya Samriddhi\n\nCheck 'My Schemes' tab!",
        upload: "Upload tips:\n\n✅ Clear photo/video\n✅ On-site location\n✅ Show actual issue\n\n🤖 AI automatically:\n• Validates GPS\n• Detects objects\n• Matches description\n• Blocks fakes!",
        default: "Ask me:\n• 'How to file complaint?'\n• 'Track my issue'\n• 'Government schemes'\n• 'Upload requirements'"
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatUI);
    } else {
        initChatUI();
    }
    
    function initChatUI() {
    const chatHTML = `
        <div id="chatbot-widget" style="position:fixed;bottom:24px;right:24px;z-index:10000;font-family:Inter,sans-serif;">
            <button id="chat-toggle" style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#FF9933,#138808);border:none;box-shadow:0 8px 24px rgba(255,153,51,0.5);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px;transition:all 0.2s;"><i class="fas fa-comments"></i></button>
            <div id="chat-win" style="position:absolute;bottom:76px;right:0;width:360px;height:520px;background:#fff;border-radius:20px;box-shadow:0 12px 48px rgba(0,0,0,0.2);display:none;flex-direction:column;overflow:hidden;border:2px solid #FF9933;">
                <div style="background:linear-gradient(135deg,#FF9933,#138808);padding:16px 20px;color:#fff;display:flex;align-items:center;justify-content:space-between;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:18px;">🤖</div>
                        <div><div style="font-size:14px;font-weight:700;">AI Assistant</div><div style="font-size:11px;opacity:0.9;">100% Local • Zero API Costs</div></div>
                    </div>
                    <button id="chat-close" style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.2);border:none;color:#fff;font-size:14px;cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
                <div id="chat-msgs" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:#f8fafc;"></div>
                <div style="padding:12px;border-top:1px solid #e2e8f0;background:#fff;display:flex;gap:8px;">
                    <input type="text" id="chat-input" placeholder="Ask me anything..." style="flex:1;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:20px;font-size:13px;outline:none;font-family:Inter,sans-serif;">
                    <button id="chat-send" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#FF9933,#138808);border:none;color:#fff;font-size:16px;cursor:pointer;"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatHTML);
    
    let chatOpen = false;
    let chatHistory = [];
    
    const toggleBtn = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('chat-close');
    const sendBtn = document.getElementById('chat-send');
    const inputBox = document.getElementById('chat-input');
    const chatWin = document.getElementById('chat-win');
    
    if (!toggleBtn || !closeBtn || !sendBtn || !inputBox || !chatWin) {
        console.error('Chatbot: Required elements not found');
        return;
    }
    
    toggleBtn.onclick = () => {
        chatOpen = !chatOpen;
        chatWin.style.display = chatOpen ? 'flex' : 'none';
        if (chatOpen && chatHistory.length === 0) addBot(responses.greeting);
        if (chatOpen) inputBox.focus();
    };
    
    closeBtn.onclick = () => {
        chatOpen = false;
        chatWin.style.display = 'none';
    };
    
    sendBtn.addEventListener('click', sendMsg);
    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMsg();
        }
    });
    
    function sendMsg() {
        const msg = inputBox.value.trim();
        if (!msg) return;
        
        addUser(msg);
        inputBox.value = '';
        
        setTimeout(() => {
            const response = getResponse(msg.toLowerCase());
            addBot(response);
        }, 400);
    }
    
    function getResponse(msg) {
        if (msg.match(/hi|hello|hey|namaste/)) return responses.greeting;
        if (msg.match(/complaint|issue|problem|file|submit|report/)) return responses.complaint;
        if (msg.match(/status|track|check|update/)) return responses.status;
        if (msg.match(/scheme|yojana|benefit|eligibility/)) return responses.scheme;
        if (msg.match(/upload|photo|video|image/)) return responses.upload;
        return responses.default;
    }
    
    function addUser(text) {
        chatHistory.push({type:'user',text});
        const div = document.createElement('div');
        div.style.cssText = 'align-self:flex-end;max-width:75%;background:linear-gradient(135deg,#FF9933,#e07a20);color:#fff;padding:10px 14px;border-radius:16px 16px 4px 16px;font-size:13px;';
        div.textContent = text;
        document.getElementById('chat-msgs').appendChild(div);
        document.getElementById('chat-msgs').scrollTop = 99999;
    }
    
    function addBot(text) {
        chatHistory.push({type:'bot',text});
        const div = document.createElement('div');
        div.style.cssText = 'align-self:flex-start;max-width:85%;background:#fff;color:#1a1d23;padding:12px 14px;border-radius:4px 16px 16px 16px;font-size:13px;line-height:1.6;box-shadow:0 1px 3px rgba(0,0,0,0.1);white-space:pre-line;';
        div.textContent = text;
        document.getElementById('chat-msgs').appendChild(div);
        document.getElementById('chat-msgs').scrollTop = 99999;
    }
    
    console.log('%c💬 Chatbot Ready (Citizen Portal Only)', 'color:#22c55e;font-weight:bold');
    }
})();


(function initNotifications() {
    const notifDiv = document.createElement('div');
    notifDiv.id = 'notif-container';
    notifDiv.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;max-width:360px;';
    document.body.appendChild(notifDiv);
    
    window.showNotification = function(title, message, type = 'info') {
        const icons = {success:'fa-check-circle',info:'fa-info-circle',warning:'fa-exclamation-triangle',error:'fa-times-circle'};
        const colors = {success:'#22c55e',info:'#3b82f6',warning:'#f59e0b',error:'#ef4444'};
        
        const notif = document.createElement('div');
        notif.style.cssText = `background:#fff;border-left:4px solid ${colors[type]};border-radius:12px;padding:14px 16px;box-shadow:0 8px 24px rgba(0,0,0,0.12);display:flex;gap:12px;animation:slideIn 0.3s;font-family:Inter,sans-serif;`;
        notif.innerHTML = `
            <i class="fas ${icons[type]}" style="color:${colors[type]};font-size:18px;margin-top:2px;"></i>
            <div style="flex:1;">
                <div style="font-size:13px;font-weight:700;color:#1a1d23;margin-bottom:2px;">${title}</div>
                <div style="font-size:12px;color:#6b7280;line-height:1.4;">${message}</div>
            </div>
            <button onclick="this.parentElement.remove()" style="border:none;background:transparent;color:#9ca3af;cursor:pointer;font-size:14px;"><i class="fas fa-times"></i></button>
        `;
        
        if (!document.getElementById('notif-style')) {
            const style = document.createElement('style');
            style.id = 'notif-style';
            style.textContent = '@keyframes slideIn{from{transform:translateX(400px);opacity:0;}to{transform:none;opacity:1;}}';
            document.head.appendChild(style);
        }
        
        notifDiv.appendChild(notif);
        setTimeout(() => {
            notif.style.animation = 'slideIn 0.3s reverse';
            setTimeout(() => notif.remove(), 300);
        }, 5000);
    };
    
    console.log('%c🔔 Notifications Ready', 'color:#22c55e;font-weight:bold');
})();
