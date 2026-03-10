'use strict';




var ALL_GRIEVANCES = [
    {
        id: 'GRV-2026-001',
        title: 'Payment not released for 4 months despite completion certificate',
        contractor: 'Larsen & Toubro Ltd.',
        project: 'NH-44 Road Widening Phase II (PRJ-2024-001)',
        category: 'Payment Delay',
        state: 'Delhi', district: 'New Delhi',
        priority: 'critical', status: 'escalated',
        filedDate: '2025-11-10', daysOpen: 116,
        lat: 28.6139, lng: 77.2090,
        description: 'Running bill No. 14 for work done between Aug-Oct 2025 has not been released despite submission of completion certificate and all supporting documents. The department cites "budget lapse" as reason but no formal written communication has been issued. Outstanding amount: ₹3.8 Cr.',
        impacts: ['Cash flow crisis', 'Labour wages pending since Oct 2025', 'Material suppliers threatening to stop supply', 'Work progress halted at 3 sites'],
        timeline: [
            { type: 'filed',     date: '2025-11-10', by: 'L&T Site Manager, Delhi',   note: 'Grievance filed. Running bill No. 14 for ₹3.8 Cr overdue since Oct end.' },
            { type: 'ack',       date: '2025-11-12', by: 'Ombudsman Desk System',     note: 'Grievance registered. Assigned to Finance Division for review.' },
            { type: 'responded', date: '2025-11-20', by: 'Finance Officer, NHAI Delhi',note: 'Bill under scrutiny. Discrepancy found in measurement sheet line-item 7. Contractor asked to resubmit.' },
            { type: 'responded', date: '2025-12-01', by: 'L&T Site Manager, Delhi',   note: 'Revised measurement sheet resubmitted as requested. All corrections made per official note.' },
            { type: 'escalated', date: '2026-01-08', by: 'Rajesh Kumar, IAS',         note: 'No action taken after resubmission for 37 days. Escalated to Divisional Commissioner. Directed Finance to process within 15 days.' }
        ]
    },
    {
        id: 'GRV-2026-002',
        title: 'Persistent delay in land clearance blocking foundation work',
        contractor: 'AFCONS Infrastructure Ltd.',
        project: 'Yamuna Bridge Structural Repair (PRJ-2024-002)',
        category: 'Permission / Land Issue',
        state: 'Uttar Pradesh', district: 'Mathura',
        priority: 'high', status: 'under_review',
        filedDate: '2025-12-20', daysOpen: 77,
        lat: 27.4924, lng: 77.6737,
        description: 'Despite Revenue Department clearance in principle dated 15 Sep 2025, the Sub-Divisional Magistrate office has not issued final land handover papers for Plot Nos. 142-B and 145-A required for abutment foundation. 3 reminders sent with no response. Foundation work for Pier-4 and Pier-5 is fully blocked.',
        impacts: ['Foundation work blocked for 77 days', 'Deadline risk: project may overrun by 3 months', '28 labourers idle daily'],
        timeline: [
            { type: 'filed',     date: '2025-12-20', by: 'AFCONS Project Manager, Mathura', note: 'Formal grievance raised. SDM office not responding to 3 formal reminders.' },
            { type: 'ack',       date: '2025-12-22', by: 'Ombudsman Desk System',            note: 'Registered. Escalated to District Collector Revenue Wing.' },
            { type: 'responded', date: '2026-01-05', by: 'DC Revenue Wing, Mathura',         note: 'Issued direction to SDM to expedite. Follow-up within 10 days.' }
        ]
    },
    {
        id: 'GRV-2026-003',
        title: 'Steel supply chain disruption — imported grade unavailable for 2 months',
        contractor: 'HCC-Samsung JV',
        project: 'Mumbai Metro Line 7 Extension (PRJ-2024-003)',
        category: 'Material Shortage',
        state: 'Maharashtra', district: 'Mumbai Suburban',
        priority: 'high', status: 'resolved',
        filedDate: '2025-10-05', daysOpen: 48,
        lat: 19.0760, lng: 72.8777,
        description: 'Fe-550D TMT steel bars (IS 1786) 32mm dia required for viaduct reinforcement are unavailable in Maharashtra market since August 2025 due to port strike impact. Domestically available grade does not meet structural design specs. Seeking approval for alternate supplier from Gujarat with equivalent grade certificate.',
        impacts: ['Viaduct spans 6-9 reinforcement work paused', 'Approx. 35-day delay risk if not resolved'],
        timeline: [
            { type: 'filed',     date: '2025-10-05', by: 'HCC Site Engineer, Andheri',  note: 'Material shortage reported. Requesting alternate supplier approval.' },
            { type: 'ack',       date: '2025-10-06', by: 'Ombudsman Desk System',        note: 'Registered. Forwarded to Structural Design Cell, Mumbai Metro Rail Corp.' },
            { type: 'responded', date: '2025-10-14', by: 'Design Chief, MMRC',           note: 'Alternate supplier Tata Steel Surat approved conditional upon test certificates.' },
            { type: 'resolved',  date: '2025-11-22', by: 'Rajesh Kumar, IAS',           note: 'Alternate material supplied, test certs verified. Grievance resolved. Work resumed.' }
        ]
    },
    {
        id: 'GRV-2026-004',
        title: 'Labour camp eviction notice during active project phase',
        contractor: 'KMC Constructions Ltd.',
        project: 'Bengaluru Outer Ring Road Expansion (PRJ-2024-005)',
        category: 'Labour / Welfare',
        state: 'Karnataka', district: 'Bengaluru Urban',
        priority: 'high', status: 'open',
        filedDate: '2026-02-18', daysOpen: 16,
        lat: 12.9716, lng: 77.5946,
        description: 'BBMP issued eviction notice to contractor\'s labour camp at Survey No. 88/3, Hebbagodi on grounds of "unauthorised structure". The camp houses 340 labourers critical to Silk Board grade separator work. Contract clearly provided for temporary accommodation in the project schedule. Seeking stay of eviction order until project completion (Sep 2026).',
        impacts: ['340 labourers may lose accommodation', 'Relocating mid-project will cause 3-4 week work stoppage', 'Humanitarian crisis risk'],
        timeline: [
            { type: 'filed', date: '2026-02-18', by: 'KMC Labour Officer, Bengaluru', note: 'Eviction notice received. Seeking urgent stay order.' },
            { type: 'ack',   date: '2026-02-19', by: 'Ombudsman Desk System',          note: 'Registered as Priority HIGH. Forwarded to BBMP Project Liaison Officer.' }
        ]
    },
    {
        id: 'GRV-2026-005',
        title: 'Scope change instruction without revised contract amendment',
        contractor: 'IRB Infrastructure Developers',
        project: 'Gujarat Coastal Economic Corridor (PRJ-2024-008)',
        category: 'Scope / Contract Dispute',
        state: 'Gujarat', district: 'Surat',
        priority: 'medium', status: 'under_review',
        filedDate: '2026-01-30', daysOpen: 35,
        lat: 21.1702, lng: 72.8311,
        description: 'Site Engineer from Roads & Buildings Dept issued verbal instruction to add 4 additional pedestrian underpasses at km 12, 18, 24, and 31 which are outside original BOQ. Estimated additional cost is ₹6.2 Cr. Despite written request for formal Contract Amendment Order (CAO) dated 22 Jan 2026, no written directive or extra payment provision has been made.',
        impacts: ['₹6.2 Cr uncompensated additional work risk', 'Contractor proceeding without payment assurance', 'Precedent for future uncompensated scope changes'],
        timeline: [
            { type: 'filed',     date: '2026-01-30', by: 'IRB Contract Manager, Surat',  note: 'Grievance filed for unauth scope change. Requesting formal CAO.' },
            { type: 'ack',       date: '2026-02-01', by: 'Ombudsman Desk System',         note: 'Registered. Forwarded to Contracts Division, R&B Dept Gujarat.' },
            { type: 'responded', date: '2026-02-12', by: 'Dy. CE R&B Dept, Gujarat',     note: 'Scope change confirmed as valid project requirement. CAO process initiated, expected in 3 weeks.' }
        ]
    },
    {
        id: 'GRV-2026-006',
        title: 'Inspection team unavailable for 6 weeks — work held up',
        contractor: 'Nagarjuna Construction Co.',
        project: 'Hyderabad IT Corridor Smart Infra Phase III (PRJ-2024-009)',
        category: 'Bureaucratic Delay',
        state: 'Telangana', district: 'Hyderabad',
        priority: 'medium', status: 'resolved',
        filedDate: '2025-12-01', daysOpen: 55,
        lat: 17.3850, lng: 78.4867,
        description: 'Third-party quality inspection certificates for completed 18 km fiber optic cable segment are pending issue for 6 weeks. The designated inspection body (TITA) has not been allocating inspection dates citing load. Without these certificates, GHMC cannot process the interim payment of ₹8.4 Cr. Work is ready and waiting.',
        impacts: ['₹8.4 Cr payment blocked', 'Next phase cannot start without prior phase clearance', 'Contractor carrying full financial burden'],
        timeline: [
            { type: 'filed',     date: '2025-12-01', by: 'NCC Project Lead, Hyderabad', note: 'TITA inspection not happening for 6 weeks. Payment blocked.' },
            { type: 'ack',       date: '2025-12-03', by: 'Ombudsman Desk System',        note: 'Registered. Forwarded to TITA Director and GHMC Smart City PMU.' },
            { type: 'responded', date: '2025-12-10', by: 'Director, TITA',               note: 'Dedicated inspection date allotted: 18 Dec 2025. Apologised for delay.' },
            { type: 'resolved',  date: '2026-01-24', by: 'Rajesh Kumar, IAS',            note: 'Inspection completed 18 Dec. Certificate issued 22 Jan. Payment processed. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-007',
        title: 'Rock blasting permit revoked mid-work by local authority',
        contractor: 'Dilip Buildcon Ltd.',
        project: 'MP NH-86 Complete Reconstruction (PRJ-2024-010)',
        category: 'Permission / Land Issue',
        state: 'Madhya Pradesh', district: 'Bhopal',
        priority: 'critical', status: 'open',
        filedDate: '2026-02-28', daysOpen: 6,
        lat: 23.2599, lng: 77.4126,
        description: 'Rock blasting permit for km 22 to km 34 section was validly obtained and work was in progress. SDM Bhopal Gram has issued sudden verbal order to stop all blasting citing "received village complaints" without serving any prior notice or issuing written order. No official documentation of the stop order given. 14 km section cannot progress without rock cutting. Seeking written order or immediate restoration of permission.',
        impacts: ['14 km section fully halted', 'Costly equipment (blasting rigs) idle', 'Project deadline Sept 2026 now at severe risk', 'Labour force of 90 workers idle'],
        timeline: [
            { type: 'filed', date: '2026-02-28', by: 'DBL Site Safety Officer, Bhopal', note: 'Emergency grievance. Blasting permit verbally revoked. No written order. Requesting urgent resolution.' },
            { type: 'ack',   date: '2026-02-28', by: 'Ombudsman Desk System',           note: 'Registered as CRITICAL PRIORITY. Forwarded to District Collector Bhopal and NHAI regional office.' }
        ]
    },
    {
        id: 'GRV-2026-008',
        title: 'Force majeure claim for flood damage rejected without site inspection',
        contractor: 'Sterlite Power Grid Ventures',
        project: 'Chandigarh Smart City Utility Corridor (PRJ-2024-011)',
        category: 'Force Majeure / Natural Disaster',
        state: 'Punjab', district: 'Chandigarh',
        priority: 'high', status: 'under_review',
        filedDate: '2026-01-15', daysOpen: 50,
        lat: 30.7333, lng: 76.7794,
        description: 'Heavy rainfall in August 2025 caused flooding of the underground utility corridor trench at Sector 22, resulting in collapse of 380m prepared trench, loss of pre-installed materials worth ₹1.2 Cr, and a 45-day work stoppage. Force majeure claim submitted 28 Aug 2025. Claim was rejected by Project Manager via email citing "contractor should have provided adequate waterproofing" — with no site visit or technical committee assessment.',
        impacts: ['₹1.2 Cr material loss uncompensated', '45-day delay not acknowledged', 'Precedent for denying legitimate force majeure claims', 'Current work rejection under appeal'],
        timeline: [
            { type: 'filed',     date: '2026-01-15', by: 'Sterlite PM, Chandigarh', note: 'Force majeure claim rejection challenged. Requesting independent technical committee assessment.' },
            { type: 'ack',       date: '2026-01-17', by: 'Ombudsman Desk System',    note: 'Registered. Forwarded to CE Civil, UT Administration Chandigarh.' },
            { type: 'responded', date: '2026-02-02', by: 'CE Civil, UT Chandigarh', note: 'Technical review committee constituted. Site visit scheduled 15 Feb 2026.' }
        ]
    },
    {
        id: 'GRV-2026-009',
        title: 'Safety barrier design change causing uncompensated re-work',
        contractor: 'L&T Construction',
        project: 'Pune Mula-Mutha River Front Development (PRJ-2024-012)',
        category: 'Design Change / Rework',
        state: 'Maharashtra', district: 'Pune',
        priority: 'low', status: 'resolved',
        filedDate: '2025-09-10', daysOpen: 40,
        lat: 18.5204, lng: 73.8567,
        description: 'After 2.1 km of flood retention wall was completed as per approved design, Urban Flood Cell issued revised guidelines requiring 15cm additional height and expanded foundation toe. L&T completed rework on instruction. The additional cost of ₹78 Lakh for rework has not been included in any VO (Variation Order). Rework completed; payment not issued.',
        impacts: ['₹78 Lakh uncompensated variation', 'Precedent risk if VO not formalised'],
        timeline: [
            { type: 'filed',     date: '2025-09-10', by: 'L&T QA Manager, Pune',     note: 'Rework on redesigned flood wall complete. VO for ₹78 Lakh requested.' },
            { type: 'ack',       date: '2025-09-11', by: 'Ombudsman Desk System',      note: 'Registered. Forwarded to PMC Riverfront Project Office.' },
            { type: 'responded', date: '2025-09-20', by: 'PMC Project Director, Pune', note: 'VO process initiated. Will be included in next bill revision. Estimated 3 weeks.' },
            { type: 'resolved',  date: '2025-10-20', by: 'Rajesh Kumar, IAS',         note: 'VO issued for ₹78 Lakh. Included in running bill No. 9. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-010',
        title: 'Repeated interference by local political functionary at work site',
        contractor: 'Adani Green Energy Ltd.',
        project: 'Rajasthan Border Solar Micro-grid (PRJ-2024-007) — Maintenance Phase',
        category: 'On-Site Interference',
        state: 'Rajasthan', district: 'Jaisalmer',
        priority: 'high', status: 'closed',
        filedDate: '2025-08-22', daysOpen: 20,
        lat: 26.9124, lng: 70.9021,
        description: 'Local representatives have on 4 occasions physically stopped panel installation work at sub-station 3 (village Mohangarh) demanding employment of specific individuals from their community. While the contractor supports local employment within legal parameters, work stoppage by external pressure is not acceptable and poses security risk to staff and equipment.',
        impacts: ['4 work stoppages totalling 8 days', 'Staff intimidation incidents', 'Security concerns for ₹18 Cr equipment'],
        timeline: [
            { type: 'filed',    date: '2025-08-22', by: 'Adani Security Head, Jaisalmer', note: 'Fourth incident of work stoppage. Police complaint lodged. Formal grievance filed.' },
            { type: 'ack',      date: '2025-08-23', by: 'Ombudsman Desk System',           note: 'Registered. Forwarded to DC Jaisalmer and SP Jaisalmer.' },
            { type: 'resolved', date: '2025-09-02', by: 'DC Jaisalmer',                    note: 'Prohibitory orders issued under Sec 144 around work site. Police picket deployed for 30 days. Situation normalised.' },
            { type: 'closed',   date: '2025-09-11', by: 'Rajesh Kumar, IAS',               note: 'Work completed without further incident. Project commissioned on schedule. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-011',
        title: 'Utility relocation (OFC cables) not completed causing 49-day stoppage',
        contractor: 'Simplex Infrastructures Ltd.',
        project: 'Kolkata Salt Lake Elevated Corridor (PRJ-2024-006)',
        category: 'Utility Relocation Delay',
        state: 'West Bengal', district: 'North 24 Parganas',
        priority: 'medium', status: 'under_review',
        filedDate: '2026-01-20', daysOpen: 45,
        lat: 22.5726, lng: 88.3639,
        description: 'BSNL OFC cables running beneath km 0.8 to km 1.4 were supposed to be relocated by BSNL before 1 Dec 2025. As of today, relocation is only 30% complete. The elevated corridor piling work at this stretch is completely blocked. Daily idle cost of machinery and labour: ₹4.2 Lakh. Total idle cost so far: ₹2.06 Cr.',
        impacts: ['49-day piling stoppage at critical section', '₹2.06 Cr idle cost accumulating', 'Project delay risk of 2 months', 'BSNL not responding to joint site meetings'],
        timeline: [
            { type: 'filed',     date: '2026-01-20', by: 'Simplex PM, Kolkata',      note: 'BSNL OFC relocation 49 days overdue. ₹2.06 Cr idle cost accumulating.' },
            { type: 'ack',       date: '2026-01-22', by: 'Ombudsman Desk System',     note: 'Registered. Forwarded to BSNL CGM West Bengal and PWD Secretary, WB.' },
            { type: 'responded', date: '2026-02-05', by: 'PWD Secretary, WB',         note: 'Joint meeting convened. BSNL committed to completing relocation by 28 Feb 2026.' }
        ]
    },
    {
        id: 'GRV-2026-012',
        title: 'Insurance claim for equipment theft denied citing procedural lapse',
        contractor: 'Tata Projects Ltd.',
        project: 'Chennai Port Water Supply Pipeline (PRJ-2024-004)',
        category: 'Insurance / Legal',
        state: 'Tamil Nadu', district: 'Chennai',
        priority: 'low', status: 'closed',
        filedDate: '2025-07-14', daysOpen: 62,
        lat: 13.0827, lng: 80.2707,
        description: 'Pipe laying machinery (2 excavators, 1 compactor) worth ₹1.4 Cr was stolen from the secured compound at site No. 4 on the night of 8 Jul 2025. FIR registered. Insurance claim submitted. Insurance company rejected citing "reporting delay of 42 hours" — contractor was waiting for police FIR copy. The 42-hour delay was due to police scheduling, not negligence of the contractor.',
        impacts: ['₹1.4 Cr insurance claim rejected', 'Equipment replaced at contractor\'s cost', 'Project timeline risk managed but financial loss sustained'],
        timeline: [
            { type: 'filed',    date: '2025-07-14', by: 'Tata Projects Legal Officer, Chennai', note: 'Insurance claim rejected. Appealing through Ombudsman.' },
            { type: 'ack',      date: '2025-07-15', by: 'Ombudsman Desk System',                 note: 'Registered. Forwarded to Insurance Regulatory Cell, Tamil Nadu Govt.' },
            { type: 'responded',date: '2025-08-01', by: 'Insurance Cell, TN Govt',              note: 'Reviewed. Police FIR delay was due to station scheduling, not contractor fault. Wrote to insurance company.' },
            { type: 'resolved', date: '2025-09-09', by: 'Insurance Cell, TN Govt',              note: 'Insurance company agreed to settle 70% of claim (₹98 Lakh). Partial justice achieved.' },
            { type: 'closed',   date: '2025-09-15', by: 'Rajesh Kumar, IAS',                    note: 'Contractor accepted partial settlement. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-013',
        title: 'Bridge approach road washed away — joint inspection refused by dept',
        contractor: 'Gauhati Bridge Corporation',
        project: 'Assam Brahmaputra Connectivity Phase II (PRJ-2025-001)',
        category: 'Force Majeure / Natural Disaster',
        state: 'Assam', district: 'Kamrup',
        priority: 'critical', status: 'open',
        filedDate: '2026-03-01', daysOpen: 6,
        lat: 26.1445, lng: 91.7362,
        description: 'Floods in Feb 2026 washed away 1.2 km of completed approach road embankment near Khetri. Contractor submitted joint inspection request to PWD within 24 hours. PWD officer refused inspection citing "busy schedule". Without joint inspection certificate, insurance claim and reconstruction authorization cannot proceed. Estimated loss: ₹2.7 Cr.',
        impacts: ['₹2.7 Cr embankment damage unverified', 'Insurance claim blocked', 'Bridge inauguration deadline June 2026 at risk', 'Reinstatement work cannot begin'],
        timeline: [
            { type: 'filed', date: '2026-03-01', by: 'GBC Site Engineer, Kamrup', note: 'Flood damage reported. Joint inspection refused by PWD officer. Urgent grievance filed.' },
            { type: 'ack',   date: '2026-03-01', by: 'Ombudsman Desk System',      note: 'Registered as CRITICAL. Forwarded to CE PWD Assam and DC Kamrup.' }
        ]
    },
    {
        id: 'GRV-2026-014',
        title: 'Tribal land consent withheld despite FPIC process completion',
        contractor: 'Odisha Infrastructure Development Corp.',
        project: 'Koraput District Road Network (PRJ-2025-002)',
        category: 'Permission / Land Issue',
        state: 'Odisha', district: 'Koraput',
        priority: 'high', status: 'under_review',
        filedDate: '2026-02-10', daysOpen: 25,
        lat: 18.8135, lng: 82.7110,
        description: 'Full FPIC (Free, Prior, Informed Consent) process for 14.6 km tribal land corridor was completed per PESA Act and Gram Sabha resolutions obtained in Nov 2025. Revenue Dept has still not issued Land Acquisition award citing "pending Collector review". Project stuck 4 months beyond FPIC completion. Work on 3 non-tribal sections complete; tribal section blocked.',
        impacts: ['14.6 km stretch blocked for 4 months post-FPIC', 'Connecting 6 villages isolated from road access', 'Contract extension costs accruing'],
        timeline: [
            { type: 'filed',     date: '2026-02-10', by: 'OIDC PM, Koraput',         note: 'FPIC done, Gram Sabha consent obtained Nov 2025. Revenue dept not issuing LA award.' },
            { type: 'ack',       date: '2026-02-12', by: 'Ombudsman Desk System',     note: 'Registered. Forwarded to Revenue Secretary, Odisha and Tribal Affairs Dept.' },
            { type: 'responded', date: '2026-02-25', by: 'Revenue Secretary, Odisha', note: 'Review expedited. Collector directed to process LA award within 21 days.' }
        ]
    },
    {
        id: 'GRV-2026-015',
        title: 'Running bills irregularly deducted — 22% over contract TDS limit',
        contractor: 'Bihar State Roads Construction Corp.',
        project: 'Patna Ganga Bridge Rehabilitation (PRJ-2025-003)',
        category: 'Payment Delay',
        state: 'Bihar', district: 'Patna',
        priority: 'critical', status: 'escalated',
        filedDate: '2026-01-25', daysOpen: 40,
        lat: 25.5941, lng: 85.1376,
        description: 'Running bills 6 through 9 have had TDS deductions of 22%–27% against the contractually agreed 2% TDS rate. DFO office cites "revised circular" but no such circular has been formally notified or shared. Total excess deduction to date: ₹1.65 Cr. Finance officer has not responded to 5 written communications. Contractor unable to pay subcontractors and material suppliers.',
        impacts: ['₹1.65 Cr excess deduction', 'Subcontractor payments 2 months overdue', 'Supply chain at breaking point', 'Daily wage workers unpaid'],
        timeline: [
            { type: 'filed',     date: '2026-01-25', by: 'BSRCC Finance Officer, Patna', note: 'TDS overcutting on 4 running bills. Written complaints ignored. Emergency grievance.' },
            { type: 'ack',       date: '2026-01-26', by: 'Ombudsman Desk System',         note: 'Registered CRITICAL. Forwarded to Finance Department Bihar and Principal AG office.' },
            { type: 'responded', date: '2026-02-08', by: 'AG Finance Audit, Bihar',       note: 'Reviewed bills. Confirmed TDS rates do not match any notified circular. DFO office summoned.' },
            { type: 'escalated', date: '2026-03-02', by: 'Rajesh Kumar, IAS',             note: 'DFO failed to appear for meeting twice. Escalated to Chief Secretary Bihar. Directed refund within 10 days.' }
        ]
    },
    {
        id: 'GRV-2026-016',
        title: 'Retaining wall VO approval stalled after PWD officer transfer',
        contractor: 'Himachal Road Construction Ltd.',
        project: 'Shimla-Rampur Hill Highway Upgrade (PRJ-2025-004)',
        category: 'Design Change / Rework',
        state: 'Himachal Pradesh', district: 'Shimla',
        priority: 'medium', status: 'open',
        filedDate: '2026-02-05', daysOpen: 30,
        lat: 31.1048, lng: 77.1734,
        description: 'Geological survey post-monsoon 2025 by HIMUDA revealed 3 retaining wall sections (km 18, 24, 29) required redesign. Contractor completed redesigned work on verbal instruction. VO for ₹1.1 Cr submitted 3 months ago. PWD SAE has been transferred; new officer refusing to process VO citing "no handover note".',
        impacts: ['₹1.1 Cr unprocessed VO', 'New officer refusing to accept prior instructions', 'Budget shortfall risk for completed work'],
        timeline: [
            { type: 'filed', date: '2026-02-05', by: 'HRCL Site Manager, Shimla', note: 'VO for ₹1.1 Cr not processed after officer transfer. Grievance filed.' },
            { type: 'ack',   date: '2026-02-06', by: 'Ombudsman Desk System',      note: 'Registered. Forwarded to CE PWD Himachal and HR Cell for officer handover resolution.' }
        ]
    },
    {
        id: 'GRV-2026-017',
        title: 'Foundation pile length increased mid-work — VO resolved amicably',
        contractor: 'Chhattisgarh Bridge Works Ltd.',
        project: 'Raipur Ring Road Phase II (PRJ-2025-005)',
        category: 'Design Change / Rework',
        state: 'Chhattisgarh', district: 'Raipur',
        priority: 'low', status: 'resolved',
        filedDate: '2025-11-15', daysOpen: 38,
        lat: 21.2514, lng: 81.6296,
        description: 'Geo-technical bore-log at pier P-7 revealed hard strata 4m deeper than design assumption. PWD instructed extension of 18 piles from 18m to 24m. CBWL completed extended piling. Additional cost of ₹54 Lakh claimed via VO. Dispute on rate resolved through SOR 2025 reference.',
        impacts: ['₹54 Lakh VO rate dispute', 'Amicable resolution reached within 38 days'],
        timeline: [
            { type: 'filed',     date: '2025-11-15', by: 'CBWL Contract Manager, Raipur', note: 'Rate dispute for pile extension VO. Requesting BOQ amendment.' },
            { type: 'ack',       date: '2025-11-16', by: 'Ombudsman Desk System',          note: 'Registered. Forwarded to PWD Design Cell, Raipur.' },
            { type: 'responded', date: '2025-11-28', by: 'SE PWD, Raipur',                 note: 'Rate analysis done. Approved ₹3,100/m for extended piling as per SOR 2025.' },
            { type: 'resolved',  date: '2025-12-23', by: 'Rajesh Kumar, IAS',              note: 'VO for ₹54 Lakh approved. Included in Bill 8. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-018',
        title: 'Worker safety violations at dam shaft site — accident occurred',
        contractor: 'Uttarakhand Hydro Construction JV',
        project: 'Tehri Pump Storage Project Civil Works (PRJ-2025-006)',
        category: 'Labour / Welfare',
        state: 'Uttarakhand', district: 'Tehri Garhwal',
        priority: 'high', status: 'under_review',
        filedDate: '2026-02-22', daysOpen: 13,
        lat: 30.3783, lng: 78.4803,
        description: 'Safety Officer submitted written complaint on 14 Feb regarding absence of mandatory fall-arrest systems at 38m shaft excavation face. Complaint was ignored. On 21 Feb a labourer fell 12m and suffered serious injuries (non-fatal). DISH shut the site. Contractor alleges department failure to enforce safety caused the incident. Seeking enforcement compliance and insurance support.',
        impacts: ['1 serious worker injury (hospitalised)', 'Site shutdown by DISH for 5 days', 'Department ignored prior safety complaint — liability risk'],
        timeline: [
            { type: 'filed',     date: '2026-02-22', by: 'UHCJV Safety Officer, Tehri', note: 'Post-accident grievance. Dept ignored safety complaint 7 days before accident.' },
            { type: 'ack',       date: '2026-02-23', by: 'Ombudsman Desk System',        note: 'Registered HIGH. Forwarded to DISH Uttarakhand and THDC safety cell.' },
            { type: 'responded', date: '2026-03-02', by: 'DISH Uttarakhand',             note: 'Investigation opened. Site inspection completed. Show-cause notice issued to departmental engineer.' }
        ]
    },
    {
        id: 'GRV-2026-019',
        title: 'Overloaded vehicle permits denied causing concrete pour disruption',
        contractor: 'Andhra Pradesh Road Development Corp.',
        project: 'Vijayawada Outer Bypass Phase I (PRJ-2025-007)',
        category: 'Bureaucratic Delay',
        state: 'Andhra Pradesh', district: 'Krishna',
        priority: 'low', status: 'closed',
        filedDate: '2025-10-20', daysOpen: 30,
        lat: 16.5062, lng: 80.6480,
        description: 'Special vehicle permits for 40T RMC carrier trucks denied by RTO Vijayawada citing "new road safety norms" though same permits were granted on same routes for 18 months. Batching plant is 8 km from work front; without permits RMC supply disrupted across 6 bridges.',
        impacts: ['RMC supply to 6 bridges disrupted', 'Concrete pour schedule delayed 3 weeks', 'Idle batching plant and workers'],
        timeline: [
            { type: 'filed',     date: '2025-10-20', by: 'APRD Site Manager, Vijayawada', note: 'RTO denying SV permits despite prior approval history. Urgent resolution needed.' },
            { type: 'ack',       date: '2025-10-21', by: 'Ombudsman Desk System',          note: 'Registered. Forwarded to Transport Commissioner AP and NHAI project director.' },
            { type: 'responded', date: '2025-10-28', by: 'Transport Commissioner, AP',    note: 'RTO instruction based on misapplication of circular. Permits to be issued within 48 hours.' },
            { type: 'resolved',  date: '2025-11-01', by: 'Transport Commissioner, AP',    note: 'All 6 permits issued. RMC supply resumed.' },
            { type: 'closed',    date: '2025-11-19', by: 'Rajesh Kumar, IAS',              note: 'Work back on schedule. Grievance formally closed.' }
        ]
    },
    {
        id: 'GRV-2026-020',
        title: 'Community blockade of licensed quarry stalling aggregate supply',
        contractor: 'Jharkhand Mining & Roads Corp.',
        project: 'Ranchi Industrial Corridor Access Roads (PRJ-2025-008)',
        category: 'On-Site Interference',
        state: 'Jharkhand', district: 'Ranchi',
        priority: 'high', status: 'open',
        filedDate: '2026-02-28', daysOpen: 7,
        lat: 23.3441, lng: 85.3096,
        description: 'Licensed quarry at Nagri (Mining Lease No. JH-Q-2024-118) supplying aggregate for the project has been physically blocked by community groups for 7 days citing noise and dust complaints. Police called twice; temporary dispersal only. Quarry has valid environmental clearance. Bituminous work on 22 km carriageway cannot continue without aggregate.',
        impacts: ['Aggregate supply to 22 km stretch halted', 'Bituminous work suspended', 'Alternate quarry 85 km away — higher cost and delay'],
        timeline: [
            { type: 'filed', date: '2026-02-28', by: 'JMRC Operations Head, Ranchi', note: 'Licensed quarry blocked by community agitation. Police intervention temporary. Formal grievance filed.' },
            { type: 'ack',   date: '2026-02-28', by: 'Ombudsman Desk System',         note: 'Registered HIGH. Forwarded to DC Ranchi, SP Ranchi and Mining Dept Jharkhand.' }
        ]
    },
    {
        id: 'GRV-2026-021',
        title: 'Soil testing lab certification lapsed — work stoppage issued by dept',
        contractor: 'Kerala Roads & Bridges Corporation',
        project: 'Thiruvananthapuram Coastal Bypass (PRJ-2026-001)',
        category: 'Bureaucratic Delay',
        state: 'Kerala', district: 'Thiruvananthapuram',
        priority: 'high', status: 'open',
        filedDate: '2026-03-03', daysOpen: 4,
        lat: 8.5241, lng: 76.9366,
        description: 'Dept issued stop-work notice citing that the contractor\'s soil testing laboratory certification from NABL had lapsed on 28 Feb 2026 by 3 days. Contractor had submitted renewal application on 10 Feb 2026 — renewal is pending at NABL end due to their processing backlog. All test results prior to lapse are valid. Dept has halted 6 km of embankment compaction work despite contractor submitting NABL acknowledgment receipt for renewal.',
        impacts: ['6 km embankment work completely halted', 'Daily cost of idle machinery: ₹1.8 Lakh', 'Monsoon season approaching — delay will extend project by months', '180 workers idle'],
        timeline: [
            { type: 'filed', date: '2026-03-03', by: 'KRBC QA Manager, Thiruvananthapuram', note: 'Stop-work issued for 3-day NABL lapse during pending renewal. NABL receipt submitted to dept — not accepted.' },
            { type: 'ack',   date: '2026-03-03', by: 'Ombudsman Desk System',                note: 'Registered HIGH. Forwarded to CE Highways Kerala and NABL Regional Office, Chennai.' }
        ]
    },
    {
        id: 'GRV-2026-022',
        title: 'Disputed measurement sheets — 3rd party verifier not deployed for 60 days',
        contractor: 'Meghalaya Infrastructure Projects Ltd.',
        project: 'Shillong Ring Road Phase III (PRJ-2026-002)',
        category: 'Payment Delay',
        state: 'Meghalaya', district: 'East Khasi Hills',
        priority: 'critical', status: 'escalated',
        filedDate: '2026-02-01', daysOpen: 34,
        lat: 25.5788, lng: 91.8933,
        description: 'Running bills 11–14 amounting to ₹4.9 Cr are blocked because PWD\'s designated 3rd party project management consultant (PMC) has not been available for joint measurement for 60 days. PWD refuses to process bills without PMC verification. PMC firm was awarded the contract by PWD — contractor has no authority over PMC absence. Contractor has written 8 letters and sent 3 formal notices with no resolution.',
        impacts: ['₹4.9 Cr in running bills unpaid', 'All site staff salaries overdue by 6 weeks', 'Bank loan EMIs missed — credit rating risk', 'Subcontractors threatening to demobilise'],
        timeline: [
            { type: 'filed',     date: '2026-02-01', by: 'MIPL Contract Head, Shillong',   note: 'PMC absent 60 days. Bills of ₹4.9 Cr stuck. 8 letters sent with no response.' },
            { type: 'ack',       date: '2026-02-03', by: 'Ombudsman Desk System',           note: 'Registered CRITICAL. Forwarded to Chief Engineer PWD Meghalaya and PMC lead firm headquarters.' },
            { type: 'responded', date: '2026-02-15', by: 'CE PWD Meghalaya',                note: 'PMC firm issued show-cause notice. Directed to deploy engineer within 7 days or contract to be terminated.' },
            { type: 'escalated', date: '2026-03-01', by: 'Rajesh Kumar, IAS',               note: 'PMC engineer deployed but measurements disputed again. Escalated to Principal Secretary PWD. Directed provisional payment of 75% within 5 days.' }
        ]
    },
    {
        id: 'GRV-2026-023',
        title: 'Premix plant location objection raised after 2 months of operation',
        contractor: 'Tripura State Construction Corp.',
        project: 'Agartala Urban Road Improvement Scheme (PRJ-2026-003)',
        category: 'Permission / Land Issue',
        state: 'Tripura', district: 'West Tripura',
        priority: 'medium', status: 'under_review',
        filedDate: '2026-02-20', daysOpen: 15,
        lat: 23.8315, lng: 91.2868,
        description: 'Contractor set up bitumen premix plant at Survey No. 34/B Jirania on land duly licensed by PWD. Plant has been operational for 2 months. Municipality of Agartala has now issued a notice objecting to the plant location citing "proximity to residential zone" — which was not flagged during the 2-month period. Contractor cannot relocate mid-project without losing 6 weeks and ₹75 Lakh in relocation costs.',
        impacts: ['Premix supply to 14 km urban stretch at risk', '₹75 Lakh estimated relocation cost unbudgeted', '6-week delay if relocation enforced', 'Daily asphalt paving halted pending resolution'],
        timeline: [
            { type: 'filed',     date: '2026-02-20', by: 'TSCC Site Manager, Agartala',    note: 'Municipality objecting to plant after 2 months. PWD had approved the location. Resolution sought.' },
            { type: 'ack',       date: '2026-02-21', by: 'Ombudsman Desk System',           note: 'Registered MEDIUM. Forwarded to DC West Tripura and Municipal Commissioner Agartala.' },
            { type: 'responded', date: '2026-03-01', by: 'DC West Tripura',                 note: 'Joint inspection of plant site scheduled for 10 Mar 2026. Status quo to be maintained until then.' }
        ]
    },
    {
        id: 'GRV-2026-024',
        title: 'Night work prohibition enforced without noise baseline assessment',
        contractor: 'Goa State Infrastructure Dev. Corp.',
        project: 'NH-66 Panaji-Margao 4-Lane Upgrade (PRJ-2026-004)',
        category: 'Bureaucratic Delay',
        state: 'Goa', district: 'South Goa',
        priority: 'low', status: 'resolved',
        filedDate: '2025-12-10', daysOpen: 28,
        lat: 15.2993, lng: 74.1240,
        description: 'GSPCB issued blanket night work prohibition to contractor citing noise complaints from Margao residential area. However, no noise baseline assessment was conducted before prohibition. The project has traffic diversion constraints that make daytime work dangerous and legally restricted by NHAI. Without night work, the critical path 3.2 km flyover section cannot meet its March 2026 structural deadline.',
        impacts: ['Night work (8pm–6am) completely prohibited', 'Flyover structural deadline missed by 6 weeks', 'Traffic diversion cost escalation'],
        timeline: [
            { type: 'filed',     date: '2025-12-10', by: 'GSIDC Project Manager, Margao', note: 'GSPCB night ban without noise baseline. NHAI daytime restriction makes work impossible. Seeking resolution.' },
            { type: 'ack',       date: '2025-12-11', by: 'Ombudsman Desk System',          note: 'Registered. Forwarded to GSPCB Chairman and NHAI Regional Officer, Goa.' },
            { type: 'responded', date: '2025-12-20', by: 'GSPCB Chairman, Goa',            note: 'Agreed to conduct noise baseline study. Interim permission for night work with noise barriers granted.' },
            { type: 'resolved',  date: '2026-01-07', by: 'Rajesh Kumar, IAS',              note: 'Noise study completed. Noise barriers installed. Night work permitted 10pm–5am with mitigation measures. Grievance closed.' }
        ]
    },
    {
        id: 'GRV-2026-025',
        title: 'Substandard cement supply by Dept-nominated vendor causing re-testing delays',
        contractor: 'Manipur Road Development Co.',
        project: 'Imphal Outer Ring Road (PRJ-2026-005)',
        category: 'Material Shortage',
        state: 'Manipur', district: 'Imphal West',
        priority: 'high', status: 'under_review',
        filedDate: '2026-03-01', daysOpen: 6,
        lat: 24.8170, lng: 93.9368,
        description: 'The project contract mandates cement supply through a department-nominated vendor (MSCL). Three consecutive batches of 53-grade OPC cement supplied between Feb 10–28 failed IS 12269 compressive strength tests at the site laboratory (results: 42.1, 43.4, 41.8 MPa vs. the 53 MPa minimum). Contractor has rejected all 3 batches with written reports. MSCL insists test results are wrong and refuses to supply alternate batches until retesting by a govt lab — which has a 3-week turnaround. All RCC work is suspended.',
        impacts: ['All RCC/concrete work on project suspended', '3-week govt lab retesting backlog blocking resolution', '₹2.1 Cr worth of poured-and-demolished test pours', 'Contractor cannot use alternate vendor without contract amendment'],
        timeline: [
            { type: 'filed', date: '2026-03-01', by: 'MRDC QC Engineer, Imphal',  note: '3 consecutive cement batches failed IS 12269. MSCL not cooperating. All RCC work suspended. Urgent resolution needed.' },
            { type: 'ack',   date: '2026-03-01', by: 'Ombudsman Desk System',      note: 'Registered HIGH. Forwarded to CE PWD Manipur, MSCL MD, and Bureau of Indian Standards Regional Office.' }
        ]
    }
];

var obGMap = null;
var gMarkers = [];
var filteredGrievances = ALL_GRIEVANCES.slice();
var _obJurGrievances   = ALL_GRIEVANCES.slice();
var selectedId = null;
var currentStatus   = 'all';
var currentPriority = 'all';
var pendingAction   = null;

function obRefreshStats() {
    var base = _obJurGrievances.length ? _obJurGrievances : ALL_GRIEVANCES;
    document.getElementById('obStatTotal').textContent    = base.length;
    document.getElementById('obStatOpen').textContent     = base.filter(g => g.status === 'open').length;
    document.getElementById('obStatReview').textContent   = base.filter(g => g.status === 'under_review').length;
    document.getElementById('obStatEscalated').textContent= base.filter(g => g.status === 'escalated').length;
    document.getElementById('obStatResolved').textContent = base.filter(g => g.status === 'resolved' || g.status === 'closed').length;
}

function initGrievanceMap() {
    var jur    = window.OFFICER_JURISDICTION || {};
    var center = jur.mapCenter || { lat: 22.5, lng: 80.0 };
    var zoom   = jur.mapZoom   || 5;

    var jurRole  = jur.role || 'national';
    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district || null;
    if (jurRole === 'state' || jurRole === 'district') {
        _obJurGrievances = ALL_GRIEVANCES.filter(function(g) {
            if (jurRole === 'district') return g.state === jurState && g.district === jurDist;
            return g.state === jurState;
        });
        var sd = document.getElementById('obStateFilter');
        if (sd) {
            sd.value = jurState;
            sd.closest && sd.closest('.ob-filter-group') && (sd.closest('.ob-filter-group').style.display = 'none');
        }
    } else {
        _obJurGrievances = ALL_GRIEVANCES.slice();
    }
    filteredGrievances = _obJurGrievances.slice();

    var mapTitleEl  = document.getElementById('obMapTitle');
    var obBannerEl  = document.getElementById('obJurBanner');
    if (jurRole === 'district' && jurDist) {
        if (mapTitleEl) mapTitleEl.textContent = '\uD83D\uDCCD Grievance Map \u2014 ' + jurDist + ', ' + (jurState || '');
        if (obBannerEl) {
            obBannerEl.style.display = 'flex';
            obBannerEl.innerHTML = '<span style="font-size:18px;">\uD83C\uDFDB\uFE0F</span>'
                + '<div><strong>District View \u2014 ' + jurDist + '</strong>'
                + '<div style="color:#555;margin-top:2px;">Showing grievances for <strong>' + jurDist + '</strong> district, ' + jurState
                + '. ' + (_obJurGrievances.length) + ' grievance(s) in your jurisdiction.</div></div>';
        }
    } else if (jurRole === 'state' && jurState) {
        if (mapTitleEl) mapTitleEl.textContent = '\uD83D\uDCCD Grievance Map \u2014 ' + jurState;
        if (obBannerEl) {
            obBannerEl.style.display = 'flex';
            obBannerEl.innerHTML = '<span style="font-size:18px;">\uD83C\uDFDB\uFE0F</span>'
                + '<div><strong>State View \u2014 ' + jurState + '</strong>'
                + '<div style="color:#555;margin-top:2px;">Showing grievances for <strong>' + jurState + '</strong> state. '
                + (_obJurGrievances.length) + ' grievance(s) in your jurisdiction.</div></div>';
        }
    } else {
        if (mapTitleEl) mapTitleEl.textContent = '\uD83D\uDCCD Grievance Map \u2014 National Overview';
        if (obBannerEl) obBannerEl.style.display = 'none';
    }

    var obMapOpts = {
        center: center,
        zoom: zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    };
    if (jur.mapBounds) {
        obMapOpts.restriction = { latLngBounds: jur.mapBounds, strictBounds: true };
        obMapOpts.minZoom = Math.max(zoom - 2, 6);
    }
    obGMap = new google.maps.Map(document.getElementById('grievanceMap'), obMapOpts);
    renderMapMarkers();
}

function statusColor(s) {
    var c = { open:'#dc3545', under_review:'#fd7e14', escalated:'#6f42c1', resolved:'#28a745', closed:'#6c757d' };
    return c[s] || '#003366';
}

function markerSVG(color) {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">' +
        '<path d="M14 0C6.268 0 0 6.268 0 14C0 22 14 36 14 36C14 36 28 22 28 14C28 6.268 21.732 0 14 0Z" fill="' + color + '"/>' +
        '<circle cx="14" cy="14" r="5.5" fill="white" opacity="0.9"/></svg>'
    );
}

function renderMapMarkers() {
    gMarkers.forEach(function(m) { m.setMap(null); });
    gMarkers = [];
    filteredGrievances.forEach(function(g) {
        var marker = new google.maps.Marker({
            position: { lat: g.lat, lng: g.lng },
            map: obGMap, title: g.title,
            icon: { url: markerSVG(statusColor(g.status)), scaledSize: new google.maps.Size(28, 36) }
        });
        var iw = new google.maps.InfoWindow({
            content: '<div style="padding:8px;min-width:180px;font-family:Segoe UI,sans-serif;">' +
                     '<strong style="color:#003366;font-size:12px;">' + g.title + '</strong><br>' +
                     '<span style="font-size:10px;color:#666;">' + g.contractor + '</span><br>' +
                     '<span style="font-size:10px;color:#666;">' + g.district + ', ' + g.state + ' &bull; ' + g.category + '</span></div>'
        });
        marker.addListener('click', function() { iw.open(obGMap, marker); selectGrievance(g.id); });
        gMarkers.push(marker);
    });
}

function obChangeMapType(v) { if (obGMap) obGMap.setMapTypeId(v); }

function setStatusPill(btn, s) {
    currentStatus = s;
    document.querySelectorAll('.s-pill').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    applyFilters();
}

function setPrioPill(btn, p) {
    currentPriority = p;
    document.querySelectorAll('.pr-pill').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    applyFilters();
}

function applyFilters() {
    var search   = (document.getElementById('obSearch').value || '').toLowerCase();
    var category = document.getElementById('obCatFilter').value;
    var state    = document.getElementById('obStateFilter').value;
    var jur      = window.OFFICER_JURISDICTION || {};
    var jurRole  = jur.role || 'national';
    var jurState = jur.jurisdiction || null;
    var jurDist  = jur.district || null;

    filteredGrievances = _obJurGrievances.filter(function(g) {
        if (jurRole === 'district' && (g.state !== jurState || g.district !== jurDist)) return false;
        if (jurRole === 'state'    && g.state !== jurState) return false;

        if (currentStatus !== 'all' && g.status !== currentStatus) return false;
        if (currentPriority !== 'all' && g.priority !== currentPriority) return false;
        if (category && g.category !== category) return false;
        if (state && g.state !== state) return false;
        if (search && g.id.toLowerCase().indexOf(search) === -1 &&
            g.title.toLowerCase().indexOf(search) === -1 &&
            g.contractor.toLowerCase().indexOf(search) === -1) return false;
        return true;
    });
    obRenderList();
    if (obGMap) renderMapMarkers();
}

function obResetFilters() {
    document.getElementById('obSearch').value = '';
    document.getElementById('obCatFilter').value = '';
    var jur = window.OFFICER_JURISDICTION || {};
    if (jur.role === 'state' || jur.role === 'district') {
        document.getElementById('obStateFilter').value = jur.jurisdiction || '';
    } else {
        document.getElementById('obStateFilter').value = '';
    }
    currentStatus = 'all'; currentPriority = 'all';
    document.querySelectorAll('.s-pill').forEach(function(b) { b.classList.remove('active'); });
    document.querySelector('.s-pill[data-s="all"]').classList.add('active');
    document.querySelectorAll('.pr-pill').forEach(function(b) { b.classList.remove('active'); });
    document.querySelector('.pr-pill[data-p="all"]').classList.add('active');
    applyFilters();
}

var STATUS_LABELS = { open:'Open', under_review:'Under Review', escalated:'Escalated', resolved:'Resolved', closed:'Closed' };
var PRIO_LABELS   = { critical:'CRITICAL', high:'HIGH', medium:'MEDIUM', low:'LOW' };

function obRenderList() {
    var container = document.getElementById('obListContainer');
    var totalBase = _obJurGrievances.length || ALL_GRIEVANCES.length;
    document.getElementById('obCount').textContent = filteredGrievances.length + ' / ' + totalBase;
    if (!filteredGrievances.length) {
        container.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-light);font-size:13px;">No grievances match the filters.</div>';
        return;
    }
    container.innerHTML = filteredGrievances.map(function(g) {
        var daysWarn = g.daysOpen > 60 ? ' d-warn' : '';
        var daysHtml = (g.status === 'open' || g.status === 'under_review' || g.status === 'escalated')
            ? '<span class="days-open' + daysWarn + '">' + (g.daysOpen > 60 ? '⚠ ' : '● ') + g.daysOpen + ' days open</span>' : '';
        return '<div class="grv-card' + (g.id === selectedId ? ' active' : '') + '" onclick="selectGrievance(\'' + g.id + '\')">' +
            '<div class="grv-top">' +
            '<span class="grv-id">' + g.id + '</span>' +
            '<div class="grv-badges">' +
            '<span class="prio-badge pb-' + g.priority + '">' + PRIO_LABELS[g.priority] + '</span>' +
            '<span class="status-badge sb-' + g.status + '">' + STATUS_LABELS[g.status] + '</span>' +
            '</div></div>' +
            '<div class="grv-title">' + g.title + '</div>' +
            '<div class="grv-meta"><span class="grv-contractor">🏗 ' + g.contractor + '</span></div>' +
            '<div class="grv-meta"><span>📂 ' + g.category + '</span><span>📍 ' + g.district + ', ' + g.state + '</span></div>' +
            daysHtml +
            '</div>';
    }).join('');
}

function selectGrievance(id) {
    selectedId = id;
    var g = ALL_GRIEVANCES.find(function(x) { return x.id === id; });
    if (!g) return;
    document.querySelectorAll('.grv-card').forEach(function(c) {
        c.classList.toggle('active', c.getAttribute('onclick') && c.getAttribute('onclick').indexOf(id) > -1);
    });
    document.getElementById('obPlaceholder').style.display = 'none';
    var el = document.getElementById('obGrvDetail');
    el.style.display = 'block';
    el.innerHTML = buildDetail(g);
    if (obGMap) { obGMap.panTo({ lat: g.lat, lng: g.lng }); obGMap.setZoom(9); }
}

var TL_LABELS  = { filed:'Grievance Filed', ack:'Acknowledged', responded:'Official Response', escalated:'Escalated', resolved:'Resolved', closed:'Closed', reopened:'Reopened' };
var TL_ICONS   = { filed:'📝', ack:'✅', responded:'💬', escalated:'⚡', resolved:'🟢', closed:'🔒', reopened:'🔄' };

function buildDetail(g) {
    var descCls = 'gd-desc-box desc-' + g.status;
    var html = '';

    html += '<div class="gd-header">';
    html += '<div class="gd-title-row">';
    html += '<div><div class="gd-id">' + g.id + ' &nbsp;·&nbsp; ' + g.category + '</div>';
    html += '<h3 class="gd-name">' + g.title + '</h3></div>';
    html += '<div class="gd-badges2">';
    html += '<span class="prio-badge pb-' + g.priority + '">' + PRIO_LABELS[g.priority] + '</span>';
    html += '<span class="status-badge sb-' + g.status + '">' + STATUS_LABELS[g.status] + '</span>';
    html += '</div></div></div>';

    html += '<div class="gd-info-grid">';
    html += '<div class="gd-info-item"><span class="gd-lbl">Contractor</span><span class="gd-val">🏗 ' + g.contractor + '</span></div>';
    html += '<div class="gd-info-item"><span class="gd-lbl">Location</span><span class="gd-val">📍 ' + g.district + ', ' + g.state + '</span></div>';
    html += '<div class="gd-info-item"><span class="gd-lbl">Filed Date</span><span class="gd-val">📅 ' + g.filedDate + '</span></div>';
    html += '<div class="gd-info-item"><span class="gd-lbl">Days Open</span><span class="gd-val"' + (g.daysOpen > 60 ? ' style="color:var(--escalated)"' : '') + '>' + g.daysOpen + ' days</span></div>';
    html += '<div class="gd-info-item gd-info-full"><span class="gd-lbl">Linked Project</span><span class="gd-val">📊 ' + g.project + '</span></div>';
    html += '</div>';

    html += '<div class="' + descCls + '">';
    html += '<div class="gd-desc-title">📋 Grievance Description</div>';
    html += '<div class="gd-desc-text">' + g.description + '</div>';
    if (g.impacts && g.impacts.length) {
        html += '<div class="gd-impact-chips">';
        g.impacts.forEach(function(imp) { html += '<span class="impact-chip">⚠ ' + imp + '</span>'; });
        html += '</div>';
    }
    html += '</div>';

    var actionable = g.status === 'open' || g.status === 'under_review' || g.status === 'escalated';
    var closedOrResolved = g.status === 'resolved' || g.status === 'closed';

    if (actionable || closedOrResolved) {
        html += '<div class="gd-response-area">';
        html += '<h4>🏛 Official Action</h4>';
        if (actionable) {
            html += '<textarea id="obRemark" rows="2" placeholder="Add official remarks or response..."></textarea>';
            html += '<div class="gd-action-btns">';
            if (g.status === 'open') {
                html += '<button class="gd-btn btn-acknowledge" onclick="doAction(\'' + g.id + '\',\'acknowledge\')">✅ Acknowledge</button>';
            }
            if (g.status !== 'escalated') {
                html += '<button class="gd-btn btn-escalate" onclick="doAction(\'' + g.id + '\',\'escalate\')">⚡ Escalate</button>';
            }
            html += '<button class="gd-btn btn-resolve" onclick="doAction(\'' + g.id + '\',\'resolve\')">🟢 Mark Resolved</button>';
            html += '<button class="gd-btn btn-close"   onclick="doAction(\'' + g.id + '\',\'close\')">🔒 Close</button>';
            html += '</div>';
        } else {
            html += '<div class="gd-action-btns">';
            html += '<button class="gd-btn btn-reopen" onclick="doAction(\'' + g.id + '\',\'reopen\')">🔄 Reopen Grievance</button>';
            html += '</div>';
        }
        html += '</div>';
    }

    html += '<div class="gd-timeline-box"><h4>📋 Activity Timeline</h4><div class="gd-timeline">';
    g.timeline.forEach(function(t) {
        html += '<div class="tl-entry">';
        html += '<div class="tl-dot tl-' + t.type + '"></div>';
        html += '<div class="tl-content">';
        html += '<div class="tl-top"><span class="tl-meta">' + (TL_ICONS[t.type] || '•') + ' ' + (TL_LABELS[t.type] || t.type) + '</span><span class="tl-date">' + t.date + '</span></div>';
        html += '<div class="tl-by">By: ' + t.by + '</div>';
        html += '<div class="tl-body">' + t.note + '</div>';
        html += '</div></div>';
    });
    html += '</div></div>';
    return html;
}

function doAction(id, action) {
    var remark = (document.getElementById('obRemark') ? document.getElementById('obRemark').value.trim() : '') || 'Action taken by Rajesh Kumar, IAS.';
    var g = ALL_GRIEVANCES.find(function(x) { return x.id === id; });
    if (!g) return;
    var typeMap    = { acknowledge:'ack', escalate:'escalated', resolve:'resolved', close:'closed', reopen:'reopened' };
    var statusMap  = { acknowledge:'under_review', escalate:'escalated', resolve:'resolved', close:'closed', reopen:'open' };
    var msgs       = { acknowledge:'Grievance acknowledged. Contractor will be notified.', escalate:'Grievance escalated to senior authority.', resolve:'Grievance marked as resolved.', close:'Grievance closed.', reopen:'Grievance reopened for further action.' };

    g.timeline.push({ type: typeMap[action], date: new Date().toISOString().slice(0, 10), by: 'Rajesh Kumar, IAS', note: remark });
    g.status = statusMap[action];

    obRefreshStats();
    applyFilters();
    selectGrievance(id);
    _obToast(msgs[action]);
} ──────────────────────────────────────────────────────
function openNewGrievanceModal() {
    document.getElementById('ngForm').reset();
    document.getElementById('obNewModal').style.display = 'flex';
}
function closeNewModal() { document.getElementById('obNewModal').style.display = 'none'; }
function submitNewGrievance() {
    var title    = (document.getElementById('ngTitle').value || '').trim();
    var contractor = (document.getElementById('ngContractor').value || '').trim();
    var category = document.getElementById('ngCategory').value;
    var state    = document.getElementById('ngState').value;
    var priority = document.getElementById('ngPriority').value;
    var desc     = (document.getElementById('ngDesc').value || '').trim();
    if (!title || !contractor || !category || !state || !desc) {
        _obToast('Please fill all required fields.'); return;
    }
    var newId = 'GRV-2026-' + String(ALL_GRIEVANCES.length + 1).padStart(3, '0');
    var today = new Date().toISOString().slice(0, 10);
    ALL_GRIEVANCES.unshift({
        id: newId, title: title, contractor: contractor,
        project: 'To be linked by admin',
        category: category, state: state, district: state,
        priority: priority, status: 'open',
        filedDate: today, daysOpen: 0,
        lat: 22.5 + (Math.random() - 0.5) * 14,
        lng: 79.0 + (Math.random() - 0.5) * 18,
        description: desc, impacts: [],
        timeline: [{ type:'filed', date:today, by:contractor, note:'Grievance formally filed via Ombudsman Desk portal.' }]
    });
    closeNewModal();
    obRefreshStats();
    applyFilters();
    _obToast('Grievance ' + newId + ' filed successfully!');
}

function _obToast(msg) {
    var t = document.getElementById('obToast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 3500);
}

function toggleOBTheme() { document.body.classList.toggle('dark-theme'); }

(function _obInit() {
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', _obInit); return; }
    var states = ALL_GRIEVANCES.map(function(g) { return g.state; })
        .filter(function(s, i, a) { return a.indexOf(s) === i; }).sort();
    var sel = document.getElementById('obStateFilter');
    if (sel) { states.forEach(function(s) { var o = document.createElement('option'); o.value = s; o.textContent = s; sel.appendChild(o); }); }
    var modal = document.getElementById('obNewModal');
    if (modal) { modal.addEventListener('click', function(e) { if (e.target === this) closeNewModal(); }); }
    obRefreshStats();
    applyFilters();
})();
