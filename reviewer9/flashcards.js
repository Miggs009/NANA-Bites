const flashcards = [
    {
        number: 1,
        question: "A city planning office studies demographic trends and projects that more public schools will be needed over the next decade. What type of need does this situation illustrate?",
        choices: [
            "Felt need",
            "Expressed need",
            "Normative need",
            "Future need"
        ],
        answer: 3,
        explanation: "The situation illustrates a future need because it is based on projected demographic trends and anticipated needs over the next decade."
    },
    {
        number: 2,
        question: "Health professionals assess the community using national health standards and conclude that there are not enough healthcare facilities. What kind of need does this describe?",
        choices: [
            "Critical-incident need",
            "Normative need",
            "Expressed need",
            "Comparative need"
        ],
        answer: 1,
        explanation: "A normative need is identified by comparing a community's condition with established professional standards or norms."
    },
    {
        number: 3,
        question: "In the context of social welfare policy, which of the following most accurately captures the fundamental and overarching objective of social welfare programs?",
        choices: [
            "To eradicate all forms of social conflict within society",
            "To maintain social stability by reinforcing existing institutional arrangements",
            "To enhance overall quality of life and promote social well-being across populations",
            "To transfer primary responsibility for welfare provision exclusively to families"
        ],
        answer: 2,
        explanation: "The fundamental objective of social welfare programs is to enhance quality of life and promote social well-being across populations."
    },
    {
        number: 4,
        question: "Which combination of statements most accurately characterizes felt needs and expressed needs within needs assessment frameworks?\n\nI. Emerge from individuals’ or groups’ personal perceptions of their conditions\nII. Reflect lived experiences and articulated concerns of community members\nIII. May exist even in the absence of professional validation or technical assessment\nIV. Are identified primarily through standardized indicators and official benchmarks\nV. Often influence the formulation and expansion of social service programs",
        choices: [
            "I, II, III, IV, and V",
            "I, II, III, and IV",
            "I, II, and III",
            "I, II, III, and V"
        ],
        answer: 3,
        explanation: "Felt and expressed needs arise from community perceptions and concerns, may exist without professional validation, and can influence social service programs. Statement IV describes normative needs."
    },
    {
        number: 5,
        question: "Which set of statements most accurately describes the defining characteristics of a social problem?\n\nI. Impacts a substantial segment of the population\nII. Is socially constructed as undesirable or harmful\nIII. Originates exclusively from individual failings and cannot be structurally addressed\nIV. Carries political, economic, and institutional consequences\nV. Requires coordinated or collective intervention for resolution",
        choices: [
            "All statements are correct",
            "I only",
            "I, II, IV, and V",
            "I and II"
        ],
        answer: 2,
        explanation: "A social problem affects a substantial population, is viewed as undesirable or harmful, has broader political and institutional consequences, and generally requires collective intervention. Statement III is incorrect."
    },
    {
        number: 6,
        question: "Which of the following most precisely defines social services within the framework of social welfare systems?",
        choices: [
            "Organized programs and interventions intended to respond to specific social needs and improve individual and community well-being",
            "Regulatory policies designed solely to stabilize market economies",
            "Voluntary charitable actions conducted exclusively during times of crisis",
            "Commercial enterprises that provide assistance primarily for profit generation"
        ],
        answer: 0,
        explanation: "Social services are organized programs and interventions designed to address specific social needs and improve individual and community well-being."
    },
    {
        number: 7,
        question: "Which option best represents the objective dimension of a social problem?",
        choices: [
            "A condition that produces demonstrable negative consequences for a significant number of people",
            "A condition widely acknowledged as requiring intervention",
            "A socially unjust circumstance affecting society at large",
            "All of the above"
        ],
        answer: 3,
        explanation: "The objective dimension involves observable harmful conditions, while widespread recognition and perceived injustice also contribute to identifying a condition as a social problem."
    },
    {
        number: 8,
        question: "Which of the following most accurately describes the subjective dimension of a social problem?",
        choices: [
            "A condition that is perceived and defined as problematic by members of society",
            "A condition determined exclusively through quantitative indicators",
            "An issue formally codified in statutory law",
            "A condition universally recognized without disagreement"
        ],
        answer: 0,
        explanation: "The subjective dimension refers to how members of society perceive and define a condition as problematic."
    },
    {
        number: 9,
        question: "Which of the following is most frequently identified as a structural issue affecting urban poor communities?",
        choices: [
            "Institutional discrimination",
            "Social exclusion from mainstream systems",
            "Limited access to safe and potable water",
            "Forced displacement due to insecure land tenure"
        ],
        answer: 2,
        explanation: "Limited access to safe and potable water is identified in the source as a structural issue affecting urban poor communities."
    },
    {
        number: 10,
        question: "Which of the following represents a persistent and historically rooted challenge faced by many indigenous communities?",
        choices: [
            "Displacement and land dispossession",
            "Age-based discrimination",
            "Inadequate urban sanitation infrastructure",
            "Exclusion from private-sector employment alone"
        ],
        answer: 0,
        explanation: "Displacement and land dispossession are persistent and historically rooted challenges faced by many indigenous communities."
    },
    {
        number: 11,
        question: "Which combination of statements most accurately reflects structural and environmental challenges commonly experienced by persons with disabilities (PWDs) and senior citizens?\n\nI. Systemic barriers to inclusive education\nII. Public stigma and ridicule related to physical or functional limitations\nIII. Widespread misinformation regarding contraception\nIV. Lack of access to sanitary facilities in general\nV. Inaccessible spaces",
        choices: [
            "I and II",
            "I, II, and V",
            "I, III, IV, and V",
            "II, III, IV, and V"
        ],
        answer: 1,
        explanation: "Systemic barriers to inclusive education, public stigma, and inaccessible spaces are identified as relevant structural and environmental challenges for PWDs and senior citizens."
    },
    {
        number: 12,
        question: "Two communities are compared: Community A has access to microfinance services and vocational training programs, while Community B lacks both. From a social development perspective, what does this comparison most strongly suggest?",
        choices: [
            "Access to financial and skills-based interventions has no measurable relationship with poverty reduction",
            "Communities provided with supportive economic programs are more likely to disrupt intergenerational poverty",
            "Vocational training contributes directly to deepening poverty",
            "Microfinance initiatives inevitably produce economic inequality"
        ],
        answer: 1,
        explanation: "Supportive economic programs such as microfinance and vocational training can provide resources and skills that help communities disrupt patterns of intergenerational poverty."
    },
    {
        number: 13,
        question: "Which combination of statements most accurately defines the concept of a need in social welfare discourse?\n\nI. A condition or resource essential for survival or well-being\nII. An indicator that necessarily implies the presence of illness or pathology\nIII. A situation that may exist independently of a formally identified social problem\nIV. A circumstance that always demands immediate intervention\nV. A state that may be physical, psychological, or social in nature",
        choices: [
            "I, II, and III",
            "I, II, III, and V",
            "I, III, and V",
            "I and V"
        ],
        answer: 2,
        explanation: "A need may be essential for well-being, can exist without being formally identified as a social problem, and may be physical, psychological, or social."
    },
    {
        number: 14,
        question: "Which category of social welfare policy refers to programs that provide benefits as a matter of entitlement, wherein eligibility and amount of assistance are determined by prior contributions made by the recipient?",
        choices: [
            "Constituent Policies",
            "Miscellaneous Policies",
            "Distributive Policies",
            "Regulatory Policies"
        ],
        answer: 2,
        explanation: "The source identifies Distributive Policies as the applicable category for policies providing benefits as a matter of entitlement."
    },
    {
        number: 15,
        question: "A municipal government creates a permanent Indigenous Peoples Affairs Desk within the mayor’s office to ensure representation in local planning, protection of ancestral rights, and delivery of culturally appropriate services. This initiative is an example of?",
        choices: [
            "Constituent Policies",
            "Miscellaneous Policies",
            "Distributive Policies",
            "Regulatory Policies"
        ],
        answer: 0,
        explanation: "Constituent Policies establish or organize governmental structures and institutions, such as a permanent Indigenous Peoples Affairs Desk."
    },
    {
        number: 16,
        question: "Which theoretical perspective asserts that social policies become effective when they are grounded in empirically validated knowledge, derived through systematic observation and scientific verification?",
        choices: [
            "Scientific Method",
            "Positivism",
            "Feminism",
            "Epistemology"
        ],
        answer: 1,
        explanation: "Positivism emphasizes empirically validated knowledge obtained through systematic observation and scientific verification."
    },
    {
        number: 17,
        question: "Which ideological perspective in social policy argues that excessive state intervention fosters dependency, and therefore government assistance should remain minimal to encourage individual responsibility?",
        choices: [
            "Marxism",
            "Post-modernism",
            "New Right",
            "Functionalism"
        ],
        answer: 2,
        explanation: "The New Right generally favors limited state intervention and emphasizes individual responsibility over extensive government assistance."
    },
    {
        number: 18,
        question: "Which policy-making approach assumes that decision-makers systematically evaluate all possible alternatives and select the option that maximizes overall societal benefit?",
        choices: [
            "Incremental Theory",
            "Rational Theory",
            "Institutional Theory",
            "Group Theory"
        ],
        answer: 1,
        explanation: "Rational Theory assumes that decision-makers systematically assess alternatives and choose the option that maximizes overall societal benefit."
    },
    {
        number: 19,
        question: "In the political system framework, what term refers to articulated claims or pressures directed at government officials or agencies by individuals or organized groups seeking action on perceived societal issues?",
        choices: [
            "Policy Statements",
            "Policy Decisions",
            "Policy Demands",
            "Policy Outcomes"
        ],
        answer: 2,
        explanation: "Policy Demands are articulated claims or pressures directed toward government officials or agencies seeking action on societal issues."
    },
    {
        number: 20,
        question: "Which stage in the policy-making process involves the structured development and analysis of alternative courses of action to address issues already recognized in the public agenda?",
        choices: [
            "Policy Formulation",
            "Agenda Setting",
            "Policy Adoption",
            "Problem Identification"
        ],
        answer: 0,
        explanation: "Policy Formulation involves developing and analyzing alternative courses of action to address recognized policy issues."
    },
    {
        number: 21,
        question: "In policy analysis, which term refers specifically to the quantifiable goods and services delivered by an agency, such as the number of beneficiaries served or programs implemented?",
        choices: [
            "Policy Outcomes",
            "Policy Demands",
            "Policy Outputs",
            "Policy Statements"
        ],
        answer: 2,
        explanation: "Policy Outputs are the quantifiable goods and services delivered by an agency, such as beneficiaries served or programs implemented."
    },
    {
        number: 22,
        question: "Which of the following combinations correctly identifies recognized types of agendas within the policy-making process?\n\nI. Systemic Agenda\nII. Institutional Agenda\nIII. Decision Agenda\nIV. Discretionary Agenda",
        choices: [
            "I, II, and III",
            "II, III, and IV",
            "I and II only",
            "I, II, III, and IV"
        ],
        answer: 3,
        explanation: "The source identifies Systemic, Institutional, Decision, and Discretionary Agendas as recognized types of agendas."
    },
    {
        number: 23,
        question: "What is the most comprehensive justification for the existence of social policy within governmental systems?",
        choices: [
            "To establish a perfectly ordered and conflict-free society",
            "To deliver redistributive services efficiently and equitably",
            "To systematically address social needs, risks, and structural inequalities",
            "All of the above"
        ],
        answer: 3,
        explanation: "The source marks all of the above. Social policy addresses social needs and inequalities and supports the organized and equitable provision of services."
    },
    {
        number: 24,
        question: "In social policy evaluation, what term refers to the intended or unintended consequences experienced by client systems as a result of agency action or inaction?",
        choices: [
            "Policy Outcomes",
            "Policy Demands",
            "Policy Outputs",
            "Policy Decisions"
        ],
        answer: 0,
        explanation: "Policy Outcomes refer to the intended or unintended consequences experienced by client systems as a result of policy or agency action or inaction."
    },
    {
        number: 25,
        question: "Which policy-making theory emphasizes gradual modification of existing policies through successive adjustments rather than comprehensive restructuring?",
        choices: [
            "Rational Theory",
            "Political System Theory",
            "Incremental Theory",
            "Game Theory"
        ],
        answer: 2,
        explanation: "Incremental Theory emphasizes gradual changes to existing policies through successive adjustments rather than comprehensive restructuring."
    },
        {
        number: 26,
        question: "Which concept reflects an intergenerational ethical principle in which present development must not compromise future capacity for resource fulfillment?",
        choices: [
            "Development",
            "Sustainability",
            "Environmental Preservation",
            "Good Governance"
        ],
        answer: 1,
        explanation: "Sustainability emphasizes meeting present needs without compromising the ability of future generations to meet their own needs."
    },
    {
        number: 27,
        question: "Which participatory planning tool enables communities to visualize cyclical variations in labor availability, income flow, climate conditions, or disease incidence over time?",
        choices: [
            "Daily Activity Schedule",
            "Household Analysis",
            "Plan",
            "Seasonal Calendar"
        ],
        answer: 3,
        explanation: "A Seasonal Calendar helps communities visualize recurring patterns and cyclical variations in factors such as labor, income, climate, and disease."
    },
    {
        number: 28,
        question: "Within results-based management, which mechanism operationalizes measurement of change by translating abstract objectives into observable evidence?",
        choices: [
            "Result",
            "Change",
            "Indicators",
            "Outcome"
        ],
        answer: 2,
        explanation: "Indicators translate objectives and intended changes into observable or measurable evidence that can be used to assess results."
    },
    {
        number: 29,
        question: "Which appraisal mechanism provides decision-makers with analytical justification for proceeding or not proceeding with a proposed intervention?",
        choices: [
            "Action Plan",
            "Situation Analysis",
            "Feasibility Study",
            "Approval Sheet"
        ],
        answer: 2,
        explanation: "A Feasibility Study assesses whether a proposed intervention is viable and provides analytical information for deciding whether to proceed."
    },
    {
        number: 30,
        question: "Within Project Cycle Management theory, which sequence most accurately represents its principal macro-phases?",
        choices: [
            "Planning, Creating, Assessment",
            "Designing, Appraisal Period, Implementation",
            "Planning, Implementation, Evaluation",
            "Planning, Implementation, Assessment"
        ],
        answer: 2,
        explanation: "The principal macro-phases identified in the source are Planning, Implementation, and Evaluation."
    },
    {
        number: 31,
        question: "Within the logical framework matrix, which of the following does NOT properly function as a means of verification for measuring project performance?",
        choices: [
            "Financial Report",
            "Organizing",
            "Minutes Of Meetings",
            "Photos"
        ],
        answer: 1,
        explanation: "Organizing is not a means of verification. Financial reports, meeting minutes, and photos can provide documentary evidence for verifying project performance."
    },
    {
        number: 32,
        question: "Which term collectively refers to structured financial reports summarizing an organization’s financial performance, position, and cash flows at the end of a fiscal period?",
        choices: [
            "Financial Statement",
            "Cash Flow",
            "Income Statement",
            "Balance Sheet"
        ],
        answer: 0,
        explanation: "Financial Statement is the collective term for structured reports describing an organization's financial performance, financial position, and cash flows."
    },
    {
        number: 33,
        question: "",
        choices: [
            "",
            "",
            "",
            ""
        ],
        answer: 0,
        explanation: ""
    },
    {
        number: 34,
        question: "In risk management theory, the interaction between the probability of occurrence and the magnitude of consequences is defined as?",
        choices: [
            "Hazards",
            "Threat",
            "Risks",
            "Weaknesses"
        ],
        answer: 2,
        explanation: "Risk reflects the interaction between the likelihood or probability of an event occurring and the magnitude of its potential consequences."
    },
    {
        number: 35,
        question: "Within logical framework construction, which of the following is generally undertaken as the final structuring step?",
        choices: [
            "Formulate Assumptions",
            "Determine How indicators will be verified",
            "Determine Inputs",
            "Defining clear outputs"
        ],
        answer: 0,
        explanation: "The source identifies formulating assumptions as the final structuring step in logical framework construction."
    },
    {
        number: 36,
        question: "Which organizational design allows for semi-autonomous groups that focus narrowly on specific functions or programs while retaining overall organizational cohesion?",
        choices: [
            "Matrix",
            "Functional",
            "Divisional",
            "Network"
        ],
        answer: 2,
        explanation: "A divisional organizational design groups activities into semi-autonomous units focused on specific functions, programs, products, or areas while remaining part of the larger organization."
    },
    {
        number: 37,
        question: "Which management theorist is recognized as the architect of modern administrative theory, emphasizing principles of planning, organizing, commanding, coordinating, and controlling?",
        choices: [
            "Henri Fayol",
            "Douglas Mcgregor",
            "Max Weber",
            "Frederick Taylor"
        ],
        answer: 0,
        explanation: "Henri Fayol is recognized for developing administrative management theory and emphasizing planning, organizing, commanding, coordinating, and controlling."
    },
    {
        number: 38,
        question: "Which conceptual framework treats an organization as an open system, encompassing inputs, transformational processes, outputs, and feedback mechanisms interacting with the external environment?",
        choices: [
            "Scientific Approach",
            "Theory Y",
            "Administrative Theory",
            "Systems Approach"
        ],
        answer: 3,
        explanation: "The Systems Approach views an organization as an open system in which inputs, transformation processes, outputs, feedback, and the external environment interact."
    },
    {
        number: 39,
        question: "Which process involves directing and coordinating human, material, and informational resources to achieve organizational objectives efficiently through cooperative effort?",
        choices: [
            "Management",
            "Administration",
            "Supervision",
            "Organization"
        ],
        answer: 0,
        explanation: "Management involves directing and coordinating organizational resources and people toward the efficient achievement of objectives."
    },
    {
        number: 40,
        question: "Which organizational concept defines the formal alignment of positions, roles, and communication channels that link people and responsibilities to ensure coordinated functioning?",
        choices: [
            "Element",
            "Structure",
            "Patterns",
            "Management"
        ],
        answer: 1,
        explanation: "Organizational structure defines the formal arrangement of positions, roles, responsibilities, and communication channels within an organization."
    },
    {
        number: 41,
        question: "Which managerial skill enables an administrator to understand complex organizational interrelationships, anticipate systemic effects, and plan long-term strategic actions?",
        choices: [
            "Technical Skill",
            "Inter-Personal Skill",
            "Conceptual Skill",
            "Procedural Skill"
        ],
        answer: 2,
        explanation: "Conceptual skill enables managers to understand complex organizational relationships, anticipate broader effects, and engage in strategic planning."
    },
    {
        number: 42,
        question: "A supervisor actively participates in all staff activities, maintains open communication, and engages directly with program implementation to ensure success. Which competency is most exemplified?",
        choices: [
            "Establishing Partnership",
            "Case Management",
            "Differential Diagnosis",
            "Partialization"
        ],
        answer: 0,
        explanation: "Establishing Partnership is demonstrated through active participation, open communication, and direct collaboration with staff in program implementation."
    },
    {
        number: 43,
        question: "Which organizational type best characterizes the Department of Social Welfare and Development, with rigid hierarchical authority, standardized procedures, and centralized decision-making?",
        choices: [
            "Matrix",
            "Functional",
            "Divisional",
            "Bureaucracy"
        ],
        answer: 3,
        explanation: "Bureaucracy is characterized by hierarchical authority, standardized procedures, formal rules, and centralized organizational structures."
    },
    {
        number: 44,
        question: "Which statement about organizational policy is factually inaccurate?",
        choices: [
            "A policy is a predetermined course of action established as a guide toward accepted objectives",
            "A policy is fundamentally a law or regulation",
            "Policy is a decision-making framework or course of action",
            "Policy is a formal documented statement of intentions and sets of actions of an organization"
        ],
        answer: 1,
        explanation: "A policy is not fundamentally the same as a law or regulation. It is a framework or predetermined course of action that guides decisions toward organizational objectives."
    },
    {
        number: 45,
        question: "Which term, described by Berne, refers to covertly motivated, complementary interpersonal interactions that obscure underlying intentions in pursuit of objectives?",
        choices: [
            "Games People Play",
            "Pressure Group",
            "Whistleblowers",
            "Grapevine"
        ],
        answer: 0,
        explanation: "Berne's concept of Games People Play refers to covertly motivated interpersonal transactions in which underlying intentions may be obscured."
    },
    {
        number: 46,
        question: "Which model of supervision is characterized by egalitarian participation, where all members engage equally and there is no designated supervisor?",
        choices: [
            "Tutorial Model",
            "Peer-Group Model",
            "The Team",
            "Tandem Supervision"
        ],
        answer: 1,
        explanation: "The Peer-Group Model is characterized by egalitarian participation in which members supervise and support one another without a designated supervisor."
    },
    {
        number: 47,
        question: "Which process systematically addresses a problem by identifying its scope, analyzing contributing factors, proposing solutions, implementing interventions, and evaluating effectiveness?",
        choices: [
            "Supervision",
            "Policy Formulation",
            "Planning",
            "Administration"
        ],
        answer: 2,
        explanation: "Planning systematically addresses a problem by assessing its scope, analyzing contributing factors, developing solutions, implementing interventions, and evaluating results."
    },
    {
        number: 48,
        question: "Which theoretical framework conceptualizes the organization as an interdependent system of parts interacting with each other and the external environment to achieve collective objectives?",
        choices: [
            "Eco-Systems Theory",
            "World Systems Theory",
            "Organizational Theory",
            "Systems Theory"
        ],
        answer: 3,
        explanation: "Systems Theory conceptualizes an organization as interconnected and interdependent parts that interact with one another and with the external environment."
    },
    {
        number: 49,
        question: "Which of the following is an erroneous statement about development as progress towards social goals?",
        choices: [
            "The objective of development is a cluster of social goals which must be realized. These goals have an umbilical relationship",
            "Development is directed and nurtured to the maximum improvement of the conditions in which people live",
            "Economic growth is only worth having as long as it leads to an improvement in the conditions in which people live in",
            "It values first the economic growth towards attaining the social goals"
        ],
        answer: 3,
        explanation: "The source identifies the fourth statement as erroneous because development as progress toward social goals places improvement in people's living conditions and social goals above economic growth alone."
    },
    {
        number: 50,
        question: "Which of the following statements misrepresents the design or implementation parameters of the Pantawid Pamilyang Pilipino Program (4Ps)?",
        choices: [
            "It is a government program that invests in the health and education of poor households.",
            "Eligible households must have children of 0–14 years old and/or a pregnant woman during assessment.",
            "Cash grant amounting to Php500 per month per household for health and nutrition expenses.",
            "A maximum of three children per household is allowed."
        ],
        answer: 1,
        explanation: "The source identifies the eligibility statement regarding children aged 0–14 and/or a pregnant woman as the statement that misrepresents the 4Ps program parameters."
    },
    {
    number: 51,
    question: "Which conceptualization of poverty attributes the cause of destitution to individual shortcomings rather than structural inequalities?",
    choices: [
        "Poverty as a problem of lack of access to government services",
        "Poverty as a problem of deprivation",
        "Poverty as a problem of individual shortcoming",
        "Poverty as a problem of unequal distribution of wealth of society"
    ],
    answer: 2,
    explanation: "Poverty as a problem of individual shortcoming attributes destitution primarily to deficiencies or shortcomings of individuals rather than structural inequalities."
},
{
    number: 52,
    question: "Within the Five-E approach of policy analysis, which dimension specifically evaluates whether a policy respects the rights, dignity, and confidentiality of its beneficiaries?",
    choices: [
        "Evaluation of alternatives",
        "Ethical considerations",
        "Social work principles",
        "Self-determination"
    ],
    answer: 1,
    explanation: "Ethical considerations evaluate whether a policy respects the rights, dignity, confidentiality, and ethical interests of its beneficiaries."
},
{
    number: 53,
    question: "A case involves a child sexually abused by her father, but the mother refuses to file charges. Under Philippine child protection laws, can a social worker legally file the case independently?",
    choices: [
        "True",
        "False",
        "It depends",
        "Not sure"
    ],
    answer: 0,
    explanation: "The provided answer identifies this statement as True, reflecting the protection of children from abuse even when a parent or guardian refuses to initiate a case."
},
{
    number: 54,
    question: "The Bangsamoro Organic Law (RA 11054) establishes the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM). Which of the following provinces is not covered under this legislation?",
    choices: [
        "Zamboanga del Sur",
        "Lanao del Sur",
        "Maguindanao",
        "Sulu"
    ],
    answer: 0,
    explanation: "Zamboanga del Sur is not among the provinces covered by the Bangsamoro Organic Law."
},
{
    number: 55,
    question: "Which law guarantees public social workers the right to compensation, benefits, protection against discrimination, union participation, and continuing professional development?",
    choices: [
        "Republic Act 4373",
        "Republic Act 5416",
        "Republic Act 9433",
        "Republic Act 10847"
    ],
    answer: 2,
    explanation: "Republic Act 9433 provides the Magna Carta of Public Social Workers, including rights related to compensation, benefits, protection, union participation, and professional development."
},
{
    number: 56,
    question: "Which term defines the engagement of children in work that deprives them of their childhood, education, and development, while posing physical, mental, social, and moral harm?",
    choices: [
        "Child Labor",
        "Working Child",
        "Child Trafficking",
        "Child at Risk"
    ],
    answer: 0,
    explanation: "Child labor refers to work that deprives children of childhood, education, development, and exposes them to physical, mental, social, or moral harm."
},
{
    number: 57,
    question: "Which combination of laws provides comprehensive legal protection for children against abuse, exploitation, and abandonment?",
    choices: [
        "I, II and III",
        "I, II, and IV",
        "I, II, III and IV",
        "II, III and IV"
    ],
    answer: 1,
    explanation: "The provided answer identifies Presidential Decree 603, Republic Act 7610, and Republic Act 9208 as the relevant combination for comprehensive child protection."
},
{
    number: 58,
    question: "In cases where both parents are absent or deceased, who is not legally authorized to exercise parental authority over minor children?",
    choices: [
        "Grandparents",
        "Legal Guardian",
        "Oldest brother or sister",
        "House parent"
    ],
    answer: 3,
    explanation: "A house parent is not identified as a person legally authorized to exercise parental authority over minor children in this situation."
},
{
    number: 59,
    question: "Which article of the Philippine Constitution defines the territorial scope of the Republic, including all islands, waters, and other territories under its jurisdiction or sovereignty?",
    choices: [
        "Article I of the Philippine Constitution",
        "Article II of the Philippine Constitution",
        "Article III of the Philippine Constitution",
        "Article IV of the Philippine Constitution"
    ],
    answer: 0,
    explanation: "Article I of the Philippine Constitution defines the national territory of the Philippines."
},
{
    number: 60,
    question: "Which principle embodies the social work commitment to ensuring equal economic, political, and social opportunities for all, particularly marginalized populations?",
    choices: [
        "Social Justice",
        "Universality",
        "Inalienable",
        "Indivisible"
    ],
    answer: 0,
    explanation: "Social justice emphasizes equal opportunities, rights, and fair access to social, economic, and political resources, particularly for marginalized populations."
},
{
    number: 61,
    question: "Which understanding of poverty frames it as a deprivation of means for basic human existence, necessitating external provision of resources to meet minimum living standards?",
    choices: [
        "Poverty as a problem of lack of access to government services",
        "Poverty as a problem of deprivation",
        "Poverty as a problem of individual shortcoming",
        "Poverty as a problem of unequal distribution of wealth of society"
    ],
    answer: 1,
    explanation: "Poverty as a problem of deprivation views poverty as lacking the basic resources and means necessary for minimum human existence and living standards."
},
{
    number: 62,
    question: "Which stage in the KALAHI-CIDSS project cycle focuses on the participatory process where communities, through elected representatives, rank or prioritize project proposals for funding?",
    choices: [
        "Project Implementation, Monitoring and Evaluation",
        "Social Preparation and Capacity Building",
        "Project Selection and Prioritization",
        "Project Identification and Conceptualization"
    ],
    answer: 2,
    explanation: "Project Selection and Prioritization is the stage where communities rank and prioritize proposed projects for funding through a participatory process."
},
{
    number: 63,
    question: "Which type of equality emphasizes morally significant interests in social organization, ensuring that individuals have equitable claims to freedoms, resources, and entitlements according to their respective needs?",
    choices: [
        "Legal",
        "Political",
        "Moral",
        "Social"
    ],
    answer: 2,
    explanation: "Moral equality emphasizes equitable consideration of morally significant interests, including fair claims to freedoms, resources, and entitlements."
},
{
    number: 64,
    question: "During which stage of the policy cycle are societal problems, proposals, and demands translated into concrete government programs, including the definition of objectives and evaluation of alternative actions?",
    choices: [
        "Policy Formulation",
        "Policy Implementation",
        "Policy Advocacy",
        "Agenda-setting"
    ],
    answer: 1,
    explanation: "The provided answer identifies Policy Implementation as the stage in which policy decisions are translated into concrete government programs and actions."
},
{
    number: 65,
    question: "Which term refers to a child whose basic needs have been deliberately or persistently unmet for at least three consecutive months?",
    choices: [
        "Neglected child",
        "Abandoned child",
        "Abused child",
        "Unattended child"
    ],
    answer: 0,
    explanation: "A neglected child is one whose basic needs have been deliberately or persistently unmet for the specified period."
},
{
    number: 66,
    question: "Which perspective prioritizes social programs that focus on material needs, human capacity development, and participation in economic activities to enhance overall economic development?",
    choices: [
        "Economic development perspective",
        "Marxist perspective",
        "Productivist perspective",
        "Pluralism"
    ],
    answer: 2,
    explanation: "The Productivist Perspective emphasizes material needs, human capacity development, and participation in productive economic activities."
},
{
    number: 67,
    question: "What does the “Equal Protection Clause” of the Philippine Constitution guarantee?",
    choices: [
        "Persons similarly situated should be treated alike under the law",
        "Persons not similarly situated should be treated alike under the law",
        "Persons similarly situated should be treated with respect",
        "None of the above"
    ],
    answer: 0,
    explanation: "The Equal Protection Clause requires that persons who are similarly situated be treated alike under the law."
},
{
    number: 68,
    question: "This stage in the Sustainable Livelihood Program (SLP) process is composed of planning and preparatory activities for setting-up or rehabilitating the micro-enterprises of program participants. These activities involve utilizing existing or acquired livelihood assets and obtaining additional resource support from external stakeholders.",
    choices: [
        "Resource Mobilization",
        "Social Preparation",
        "Mainstreaming",
        "Pre-Implementation"
    ],
    answer: 0,
    explanation: "Resource Mobilization involves preparing for livelihood activities by utilizing available assets and obtaining additional resources from external stakeholders."
},
{
    number: 69,
    question: "A child who has no proper parental care or guardianship, or whose parent(s) have deserted him/her for a period of at least three (3) continuous months is referred to as _________.",
    choices: [
        "Child legally available for adoption",
        "Orphaned",
        "Abandoned child",
        "Neglected child"
    ],
    answer: 2,
    explanation: "An abandoned child is one who lacks proper parental care or guardianship or whose parent or parents have deserted the child for at least three continuous months."
},
{
    number: 70,
    question: "Social justice, one of the core values of social work, serves as the basis for policy practice. Social workers engaging in policy practice are proactively shaping and evaluating new service paradigms and programs to address emergent needs.",
    choices: [
        "The first statement is true, the second statement is false.",
        "The first statement is false, the second statement is true.",
        "Both statements are true.",
        "Both statements are false."
    ],
    answer: 2,
    explanation: "Both statements are true. Social justice is a core social work value, and policy practice involves shaping and evaluating programs and service approaches to respond to emerging needs."
},
{
    number: 71,
    question: "Social protection programs of DSWD, which resources are focused in one common area in order to create optimum impact.",
    choices: [
        "Contest strategy",
        "Convergence strategy",
        "Collective strategy",
        "Complement strategy"
    ],
    answer: 1,
    explanation: "A convergence strategy focuses resources and efforts from different programs or sectors in a common area to maximize their combined impact."
},
{
    number: 72,
    question: "The following are salient features of RA 10121 or the Philippine Disaster Risk Reduction and Management Act of 2010, EXCEPT:",
    choices: [
        "To prevent the loss of lives during disasters (natural or man-made)",
        "To intensify the loss of structures",
        "To prepare the people for the upcoming typhoons, earthquakes, landslides, etc.",
        "A new law which transforms the Philippines’ disaster management system from disaster relief and response to disaster risk reduction (DRR)."
    ],
    answer: 1,
    explanation: "Intensifying the loss of structures is contrary to the objectives of RA 10121, which focuses on reducing disaster risks, losses, and vulnerabilities."
},
{
    number: 73,
    question: "Which of the following events significantly contributed to the development of social welfare in the Philippines during the 1970s?",
    choices: [
        "I, II, and III",
        "I, III, and IV",
        "III, II, and IV",
        "All of the Above"
    ],
    answer: 1,
    explanation: "The provided answer identifies I, III, and IV as the events associated with the development of social welfare in the Philippines during the 1970s."
},
{
    number: 74,
    question: "In social work practice, how do summative and formative evaluations differ in purpose and application?",
    choices: [
        "I only",
        "II only",
        "III only",
        "All of the Above"
    ],
    answer: 2,
    explanation: "Statement III correctly distinguishes the two: summative evaluation assesses an intervention's impact after completion, while formative evaluation provides ongoing feedback to refine implementation."
},
{
    number: 76,
    question: "The Sustainable Development Goals (SDGs) target a broad range of global issues. Which of the following challenges fall directly under the remit of SDG 13 (Climate Action)? I. Loss of biodiversity and extinction of species II. Inadequate climate adaptation measures and disaster risk reduction III. Rising global temperatures and extreme weather events IV. Habitat destruction due to urbanization and agriculture V. Deforestation and illegal logging",
    choices: [
        "I, IV, and V",
        "I and IV",
        "II and III",
        "All of the above"
    ],
    answer: 3,
    explanation: "The provided answer identifies all of the listed challenges as falling under the remit of SDG 13 (Climate Action)."
},
{
    number: 77,
    question: "Which of the following historical initiatives are considered key milestones in the development of social welfare during the Spanish colonial period in the Philippines? I. The doctrine of parens patriae, allowing the state to care for abandoned and neglected individuals II. Establishment of asylums and orphanages providing care for the poor, sick, and youth III. Provision of medical care, food, and clothing for victims of war and epidemics IV. Charitable works and relief services administered by religious organizations, especially Catholic orders",
    choices: [
        "I, II, and IV",
        "I, III, and IV",
        "II and IV only",
        "All of the above"
    ],
    answer: 2,
    explanation: "The provided answer identifies II and IV as the key milestones during the Spanish colonial period."
},
{
    number: 78,
    question: "Which of the following does NOT represent an example of descriptive statistics in social work practice? I. Comparing stress levels between employed and unemployed youth to determine statistically significant differences II. Reporting that 60% of shelter clients last month were women, with an average stay of 12 days III. Using data from 150 households to predict income levels of the entire municipal population IV. Summarizing the number of child abuse cases in a month: 65% neglect, 25% physical abuse, 10% emotional abuse",
    choices: [
        "I and III",
        "II and IV",
        "None of the above",
        "All of the above"
    ],
    answer: 0,
    explanation: "Items I and III involve inferential analysis or prediction rather than simply describing or summarizing observed data."
},
{
    number: 79,
    question: "Which of the following definitions best reflects the deductive research approach commonly employed in social work studies? I. Empirical measurement through structured methodologies facilitating quantification of phenomena II. Deductive reasoning to establish narrative coherence and predictive insights III. Positivist-driven framework for variable analysis IV. Promotes generalizability and standardization across multiple contexts",
    choices: [
        "I, II, III, IV",
        "I, II, III",
        "II, III, IV",
        "I, III, IV"
    ],
    answer: 0,
    explanation: "The provided answer identifies all four statements as characteristics of the deductive research approach."
},
{
    number: 80,
    question: "Which of the items listed below reflect the core principles of the Harmonized Gender and Development Guidelines (HGDG) based on its framework? I. Equality between women and men as a key women’s human right. II. Participation in development which is crucial to the empowerment of women and men. III. Gender equality that means promoting equal participation of women as agents of economic, social, and political change. IV. Achieving equality between women and men that may involve the introduction of specific measures designed to eliminate gender inequalities and inequities.",
    choices: [
        "I, III, IV only",
        "II, III and IV only",
        "All except IV",
        "All of the Above"
    ],
    answer: 3,
    explanation: "The provided answer identifies all four statements as reflecting core principles of the Harmonized Gender and Development Guidelines."
},
{
    number: 81,
    question: "A Municipal Social Welfare Officer quickly decides to reroute relief delivery by boat during a flood, based on previous typhoon experiences, even without consulting the official disaster protocols.",
    choices: [
        "Management by Libro",
        "Management by Kayod",
        "Management by Lusot",
        "Management by Oido"
    ],
    answer: 3,
    explanation: "Management by Oido refers to relying on one's own experience, intuition, or practical judgment rather than strictly following written procedures."
},
{
    number: 82,
    question: "A supervisor at a DSWD field office requires all social workers to submit their SWDI monitoring forms every Friday. One staff member has consistently failed to submit on time. Instead of scolding the worker publicly, the supervisor invites her to talk privately over coffee and reminds her of deadlines. What supervision function is demonstrated?",
    choices: [
        "Supportive",
        "Administrative",
        "Educational",
        "Participatory"
    ],
    answer: 1,
    explanation: "The administrative supervision function includes ensuring compliance with agency policies, procedures, responsibilities, and deadlines."
},
{
    number: 83,
    question: "A graduate student designing a social work study is defining the core issues and specific inquiries that will guide the collection of empirical data. Which component of the research explicitly serves this purpose?",
    choices: [
        "Research Questions",
        "Research Gap",
        "Background of the Study",
        "Data Gathering"
    ],
    answer: 0,
    explanation: "Research questions define the specific inquiries and issues that guide the collection and analysis of empirical data."
},
{
    number: 84,
    question: "In a qualitative investigation, Participant A refers the researcher to another potential participant who meets the inclusion criteria for in-depth interviews. This referral chain continues until the researcher reaches the required sample size. Which sampling method best describes this scenario?",
    choices: [
        "Purposive Sampling",
        "Quota Sampling",
        "Convenient Sampling",
        "Snowball Sampling"
    ],
    answer: 3,
    explanation: "Snowball sampling uses participant referrals to identify additional participants who meet the study's inclusion criteria."
},
{
    number: 85,
    question: "In social work research, the term for individuals who provide responses and information during data collection is:",
    choices: [
        "Respondents",
        "Validators",
        "Researchers",
        "Peer Debriefers"
    ],
    answer: 0,
    explanation: "Respondents are individuals who provide information or answers during the data collection process."
},
{
    number: 86,
    question: "During the initial stages of a study, a researcher systematically reviews existing theoretical and empirical literature, identifies how variables and indicators have been operationalized in prior studies, and uses this to refine their own conceptual framework. Which stage does this describe?",
    choices: [
        "Literature Review",
        "Data Analysis",
        "Data Collection",
        "Theoretical Framework/Lens"
    ],
    answer: 0,
    explanation: "A literature review systematically examines existing theoretical and empirical studies and helps refine the study's conceptual framework."
},
{
    number: 87,
    question: "At the conclusion of a study, the researcher draws generalizations and logical interpretations directly informed by the analyzed findings. Which research section does this describe?",
    choices: [
        "Summary",
        "Conclusion",
        "Data Analysis",
        "Recommendation"
    ],
    answer: 1,
    explanation: "The conclusion presents logical interpretations and generalizations drawn from the analyzed findings."
},
{
    number: 88,
    question: "After completing an inquiry, the researcher proposes practical courses of action or interventions addressed to stakeholders to resolve or mitigate identified problems. Which part of the research does this reflect?",
    choices: [
        "Summary",
        "Recommendations",
        "Conclusion",
        "Research Significance"
    ],
    answer: 1,
    explanation: "Recommendations propose practical actions or interventions that stakeholders can take based on the study's findings."
},
{
    number: 89,
    question: "Illegally placing a child with a family in exchange for consideration constitutes a punishable offense under which of the following laws?",
    choices: [
        "RA 8552",
        "RA 7610",
        "RA 9208",
        "All of the above"
    ],
    answer: 3,
    explanation: "The provided answer identifies all of the listed laws as providing legal provisions relevant to the offense."
},
{
    number: 90,
    question: "For an act to qualify as sexual harassment under RA 7877, unwanted sexual advances or conduct by a superior, employee, or teacher must occur within which setting?",
    choices: [
        "Work environment",
        "Education environment",
        "Training-related environment",
        "All of the above"
    ],
    answer: 3,
    explanation: "RA 7877 covers sexual harassment in employment, education, and training-related environments."
},
{
    number: 91,
    question: "In matters of adoption or foster care, the paramount consideration is:",
    choices: [
        "Placement in a permanent family",
        "Return to the biological family or relatives",
        "Best welfare and interest of the child",
        "Best welfare of the child, biological parents, and prospective adoptive/foster parents"
    ],
    answer: 2,
    explanation: "The best welfare and interest of the child is the paramount consideration in adoption and foster care decisions."
},
{
    number: 92,
    question: "The two major indicators of the Social Welfare and Development Indicator (SWDI) tool are:",
    choices: [
        "Social adequacy and access to basic services",
        "Economic efficiency and social adequacy",
        "Opportunities to assets and economic efficiency",
        "Economic resources and social services"
    ],
    answer: 1,
    explanation: "The provided answer identifies economic efficiency and social adequacy as the two major indicators of the SWDI tool."
},
{
    number: 93,
    question: "What is the management of material and human resources to meet the goals of a human service agency?",
    choices: [
        "Social Administration",
        "Social Work Administration",
        "Social Agency Administration",
        "Social Welfare Administration"
    ],
    answer: 1,
    explanation: "Social Work Administration involves managing material and human resources to accomplish the goals and objectives of a human service agency."
},
{
    number: 94,
    question: "Which of the following statements does NOT limit policy making?",
    choices: [
        "The decision addresses a problem or issue that is perceived as significant to the community",
        "Failure to have the right information can impede decision-making",
        "Legitimate community interests have multiple and often conflicting goals",
        "Some interest groups may use analysis to rationalize choices they have already made"
    ],
    answer: 0,
    explanation: "The first statement describes a reason for policy action rather than a limitation on policy making."
},
{
    number: 95,
    question: "Which two major frameworks does Gender and Development (GAD) primarily focus on?",
    choices: [
        "Women’s rights versus men’s rights",
        "Feminism and the emancipation of women",
        "Gender roles and social relations analysis",
        "Gender Sensitivity and Inequality"
    ],
    answer: 2,
    explanation: "GAD primarily examines gender roles and social relations, focusing on how social structures and relationships create gender inequalities."
},
{
    number: 96,
    question: "What technique does the supervisor utilize when he/she assures Marina Ciena that her case of being an unwed mother is now common and encourages her to be strong to keep her baby?",
    choices: [
        "Manipulation",
        "Universalization",
        "Reassurance",
        "Ventilation"
    ],
    answer: 1,
    explanation: "Universalization helps a client recognize that their experiences or difficulties are shared by other people and are not unique to them."
},
{
    number: 97,
    question: "The Seniors Association of Brgy. Katipunan was called to elect their new set of officers. In his/her legwork, the worker asked them if Mr. Apokon is qualified to become the president as he is willing to accept responsibility though he is not the best of the group. What technique was employed by the worker in this situation?",
    choices: [
        "Consciousness raising",
        "Reward or punishment",
        "Confrontation",
        "Manipulation"
    ],
    answer: 0,
    explanation: "Consciousness raising helps group members become aware of issues, possibilities, and their own capacity to participate and take responsibility."
},
{
    number: 98,
    question: "What type of counseling is given to couples undergoing a six-month trial separation as required by the court?",
    choices: [
        "Marriage Enrichment",
        "Marital Counseling",
        "Trial Separation Exercise",
        "Pre-Marital Counseling"
    ],
    answer: 2,
    explanation: "The provided answer identifies Trial Separation Exercise as the counseling approach associated with couples undergoing a court-required six-month trial separation."
},
{
    number: 99,
    question: "What fundamental value does Gender and Development (GAD) seek to achieve?",
    choices: [
        "Social liberty",
        "Pursuit of happiness",
        "Gender equality",
        "Human rights"
    ],
    answer: 2,
    explanation: "Gender equality is the fundamental value that GAD seeks to promote and achieve."
},
{
    number: 100,
    question: "Which of the following training program evaluation is referred to when the program team assesses the soundness of the design responding to the needs of participants?",
    choices: [
        "Participants’ report",
        "Participants’ feedback form",
        "Pre-program critiquing",
        "Certificates and awards"
    ],
    answer: 2,
    explanation: "Pre-program critiquing evaluates the soundness of the training design and how well it responds to the participants' identified needs."
}

];
