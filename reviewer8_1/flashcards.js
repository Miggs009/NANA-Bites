const flashcards = [
    {
        number: 1,
        question: "This was enacted in March 2020 granting the President additional authority to combat the COVID-19 pandemic in the Philippines.",
        choices: [
            "Republic Act No. 11469",
            "Bayanihan to Heal as One Act",
            "Republic Act 11694",
            "A and B",
            "B and C"
        ],
        answer: 3,
        explanation: "Republic Act No. 11469, also known as the Bayanihan to Heal as One Act, granted the President additional authority to address the COVID-19 pandemic."
    },
    {
        number: 2,
        question: "Enacted in September 2020 granting the President additional authority to combat the COVID-19 pandemic in the Philippines.",
        choices: [
            "Republic Act No. 11494",
            "Bayanihan to Recover as One Act",
            "Republic Act 11694",
            "A and B",
            "B and C"
        ],
        answer: 3,
        explanation: "Republic Act No. 11494, also known as the Bayanihan to Recover as One Act, granted additional authority to address the COVID-19 pandemic."
    },
    {
        number: 3,
        question: "A personality theory that is based on the understanding that one’s mental life is made up of both the conscious and the unconscious. It presupposes that one’s psychological adaptation is a mental apparatus to produce a ‘steady state’ and reduce conflict as much as possible.",
        choices: [
            "Psychoanalytic theory",
            "Existential theory",
            "Experiential theory",
            "Humanistic theory",
            "Both b and c"
        ],
        answer: 0,
        explanation: "Psychoanalytic theory emphasizes the role of both conscious and unconscious mental processes and views psychological functioning in terms of managing internal conflicts."
    },
    {
        number: 4,
        question: "Such maladjustment becomes pathological when a person is overwhelmed by a sense of inadequacy and becomes incapable of development. The person would seek to escape through a compensatory move toward superiority.",
        choices: [
            "Inferiority feelings",
            "Inferiority complex",
            "Neurotic",
            "None of the above",
            "Both b and c"
        ],
        answer: 1,
        explanation: "An inferiority complex occurs when feelings of inadequacy become overwhelming and pathological, leading the person to compensate by striving for superiority."
    },
    {
        number: 5,
        question: "One who is often away from home but remains maintains a warm relationship with children.",
        choices: [
            "Procreator father",
            "Dilettante father",
            "Determinative father",
            "Generative father",
            "Both b and c"
        ],
        answer: 1,
        explanation: "The dilettante father is described as one who is often away from home but maintains a warm relationship with his children."
    },
    {
        number: 6,
        question: "It indicates that Caring/Healing/Teaching are not just present in all quadrants, and all levels, but are more than and beyond all quadrants and all levels.",
        choices: [
            "Transcendence",
            "Immanence",
            "Nutriments",
            "Emergence",
            "Both b and c"
        ],
        answer: 0,
        explanation: "Transcendence refers to something that goes beyond and is more than all quadrants and levels."
    },
    {
        number: 7,
        question: "It is best characterized as a kind of teeter-totter in which on one end are “demands made by the environment”, and on the other, the “ability of the organism to meet the demands of the environment.”",
        choices: [
            "Life cycle",
            "Stage",
            "Level",
            "None of the Above",
            "Both b and c"
        ],
        answer: 1,
        explanation: "A stage is characterized by the balance between environmental demands and the organism’s ability to meet those demands."
    },
    {
        number: 8,
        question: "The \"with the world\", includes the meaning of the world of fellow beings or the meaning of one's relationship with others, the meaning that others design into the social relationship.",
        choices: [
            "Mitwelt",
            "Eigenwelt",
            "Umwelt",
            "Grimme",
            "Both b and c"
        ],
        answer: 0,
        explanation: "Mitwelt refers to the person's relationship and interaction with other people or the social world."
    },
    {
        number: 9,
        question: "The \"world around\" or non-personal, includes the biological drives, needs and instincts of the individual; the physical environment is composed of animate and inanimate objects.",
        choices: [
            "Mitwelt",
            "Eigenwelt",
            "Umwelt",
            "Grimme",
            "Both b and c"
        ],
        answer: 2,
        explanation: "Umwelt refers to the non-personal world around the individual, including the physical environment and biological aspects."
    },
    {
        number: 10,
        question: "This refers both to the quality of one’s interpersonal relationships and to the level of development of one’s internalized sense of self and others.",
        choices: [
            "Adaptive Repression in the Service of the Ego",
            "Object Relations",
            "Mastery Competence",
            "Sense of the Reality of the World and the Self",
            "Synthetic/Integrative Function"
        ],
        answer: 1,
        explanation: "Object relations refers to the quality of interpersonal relationships and the development of internalized representations of self and others."
    },
    {
        number: 11,
        question: "One of the central assumptions of Freud’s theory or commonly known as the psychoanalytic theory is that",
        choices: [
            "Psychopathology is a result of behavioral conditioning and reinforcement.",
            "Psychopathology results from unconscious conflicts in the individual.",
            "Psychopathology is a product of thoughts and demands that people impose on themselves.",
            "Psychopathology is a product of faulty thinking and cognitions.",
            "Both b and c"
        ],
        answer: 1,
        explanation: "A central assumption of psychoanalytic theory is that psychopathology can result from unresolved unconscious conflicts."
    },
    {
        number: 12,
        question: "Which of the following would be more likely be very distressing to people with agoraphobia?",
        choices: [
            "A crowded mall",
            "Living room",
            "Comfort room",
            "Classroom",
            "Both b and c"
        ],
        answer: 0,
        explanation: "A crowded mall can be particularly distressing for a person with agoraphobia because it is a public environment from which escape may feel difficult."
    },
    {
        number: 13,
        question: "This is our idealistic view of what is right?",
        choices: [
            "Conscience",
            "Unconscious",
            "Conscious",
            "Ego-ideal",
            "Erogenous"
        ],
        answer: 3,
        explanation: "The ego-ideal represents the idealistic standards and image of what a person believes is right or desirable."
    },
    {
        number: 14,
        question: "This level contains the settings or events that the child does not actively participate in but that have a profound effect on the child's development nonetheless.",
        choices: [
            "Microsystem",
            "Mesosystem",
            "Exosystem",
            "Macrosystem",
            "None of the above"
        ],
        answer: 2,
        explanation: "The exosystem includes settings and events in which the child does not directly participate but which can still influence the child's development."
    },
    {
        number: 15,
        question: "It emphasizes the innate potential every person is believed to possess. It also highlights what is known as the drive towards self-actualization.",
        choices: [
            "Psychodynamic Approach",
            "Cognitive Behavioural Approach",
            "Humanistic Approach",
            "Social Learning Theory",
            "Both b and c"
        ],
        answer: 2,
        explanation: "The Humanistic Approach emphasizes human potential, personal growth, and the drive toward self-actualization."
    },
    {
        number: 16,
        question: "Ericka was busy washing the new plates when the visitors arrived. Her mother is busy accommodating all the needs of the visitors. She was used to it, they don’t get the chance to use the new plates unless there are visitors. All the nicest and pleasant things were for them. What kind of trait does the Filipinos have?",
        choices: [
            "Accommodating",
            "Utang na loob",
            "Hospitality",
            "Bayanihan",
            "Pakikisama"
        ],
        answer: 2,
        explanation: "Hospitality refers to the Filipino practice of warmly welcoming guests and offering them the best available food, things, and accommodations."
    },
    {
        number: 17,
        question: "A concrete example of such phenomenon which has greatly altered the existing state of affairs in the society. This alteration could be at the micro level such as changes in the family structures or alteration on gender dynamics.",
        choices: [
            "Globalization",
            "Planned change",
            "Development",
            "All of the above.",
            "Both b and c"
        ],
        answer: 0,
        explanation: "Globalization can greatly alter existing social conditions, including family structures and gender dynamics."
    },
    {
        number: 18,
        question: "Refers to a society's categorization of its people into rankings of socioeconomic tiers based on factors like wealth, income, race, education, and power.",
        choices: [
            "Diffusion",
            "Free the market and roll back the state",
            "Social Movements",
            "Revolution",
            "Social Stratification"
        ],
        answer: 4,
        explanation: "Social stratification refers to the ranking of people into socioeconomic layers based on factors such as wealth, income, education, and power."
    },
    {
        number: 19,
        question: "A theory of social change that takes human behaviour as being influenced by meanings that are constructed through social interaction. Social change is therefore caused by changes social construction.",
        choices: [
            "Structural functionalism",
            "Conflict theory",
            "Symbolic Interactionism",
            "None of the above.",
            "Both b and c"
        ],
        answer: 2,
        explanation: "Symbolic Interactionism explains behavior and social change through meanings that people construct through social interaction."
    },
    {
        number: 20,
        question: "It is an illustration of social change as a result of industrialization, characterized by increased social differentiation and division of labor, bureaucratization, and emergence of new communities from bonding through personal ties to impersonal relationships based on utility.",
        choices: [
            "Development displacement",
            "Modernization",
            "Industrialization",
            "None of the above.",
            "Both b and c"
        ],
        answer: 1,
        explanation: "Modernization describes social transformation associated with industrialization, differentiation, division of labor, bureaucratization, and more impersonal relationships."
    },
    {
        number: 21,
        question: "In the development theory of growth and modernization of Rodan and Nurkse, the Big Push Theory, the problems that they have identified are low income, low buying power, high unemployment and underemployment in agriculture. The solutions they proposed are:",
        choices: [
            "The State to be actively involved in providing incentives to capitalists to invest in industrialization of agriculture and in education of human capital",
            "Land Use Conversion and investment on agricultural technologies",
            "Adaptation of western values",
            "All of the above.",
            "Both b and c"
        ],
        answer: 0,
        explanation: "The Big Push Theory emphasizes active state involvement in promoting industrialization and investment in human capital."
    },
    {
        number: 22,
        question: "Perroux on Growth Poles believes that underdevelopment is caused by concentration of dynamic subsectors in certain areas while the non-dynamic sectors are left behind and became dependent on the dynamic sectors. The solution accordingly is:",
        choices: [
            "Focus on sectors which had strong backward and forward links and let this sector pull up the economy.",
            "Development of non-dynamic sectors",
            "Industrial programming",
            "None of the above.",
            "Both b and c"
        ],
        answer: 1,
        explanation: "Based on the provided material, the identified solution is the development of non-dynamic sectors."
    },
    {
        number: 23,
        question: "Rostow attributes to low rate of savings and investments as the problems hindering development. He identified the preconditions to take off:",
        choices: [
            "Increase in investment rate",
            "Emergence of growth sectors as engines of growth",
            "Establishment of political, social and institutional frameworks",
            "All of the above",
            "Both b and c"
        ],
        answer: 3,
        explanation: "Rostow's preconditions for take-off include increased investment, the emergence of growth sectors, and appropriate political, social, and institutional frameworks."
    },
    {
        number: 24,
        question: "Of people along three dimensions: living a long and healthy life, as measured by life expectancy at birth; being knowledgeable as measured by a combination of the adult literacy rate and the combined enrolment ratio in primary, secondary and tertiary education; and having access to a decent standard of living as measured by an index of income per capita.",
        choices: [
            "Gender Empowerment Measure",
            "Human Development Index",
            "Human Poverty Index",
            "All of the above",
            "Both b and c"
        ],
        answer: 1,
        explanation: "The Human Development Index measures development using dimensions related to health, education, and standard of living."
    },
    {
        number: 25,
        question: "It refers to the multidisciplinary perspective of development which aims to link economic progress with the enhancement of the social aspects of life towards the improvement of social well-being of individuals, families, groups and communities.",
        choices: [
            "Social development",
            "Sustainable development",
            "Gender and Development",
            "Rights-based approach to development",
            "Both b and c"
        ],
        answer: 0,
        explanation: "Social development links economic progress with improvements in social well-being for individuals, families, groups, and communities."
    },
    {
    number: 26,
    question: "An economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state.",
    choices: [
        "Capitalism",
        "Sustainable development",
        "Neoliberalism",
        "Rights-based approach to development",
        "Both b and c"
    ],
    answer: 0,
    explanation: "Capitalism is an economic and political system in which trade and industry are controlled by private owners for profit rather than by the state."
},
{
    number: 27,
    question: "What is the emphasis of the Hawthorne experiment and studies?",
    choices: [
        "The importance of human attitudes and feelings in management and production as well as the right of employees.",
        "The importance of personnel selection and personality testing",
        "The importance of job satisfaction of employees through participation in decision-making.",
        "The importance of job performance and employee motivation.",
        "The importance of task specialization into simple, routine categories on the basis of competencies of the employees."
    ],
    answer: 0,
    explanation: "The Hawthorne experiments emphasized the importance of human attitudes and feelings in management and production, including attention to employees."
},
{
    number: 28,
    question: "Caseworkers often have to deal with complex human behaviours, people with diverse personalities. It is imperative for the caseworker to have interdisciplinary knowledge and understanding derived from psychology, sociology, psychiatry etc.",
    choices: [
        "Knowledge of Human Behavior",
        "An open unbiased attitude",
        "Ability to enter into feelings of people",
        "Ability to keep perspective",
        "Both b and c"
    ],
    answer: 0,
    explanation: "Knowledge of Human Behavior is essential for caseworkers because they deal with complex human behaviors and diverse personalities."
},
{
    number: 29,
    question: "Which do you think is least inapplicable in these hereunder statements about the challenging social workers driven demand of being generalist? I. Social workers help community members realize their membership potential in many different ways. II. They have many roles of advocate, counselor, teacher, researcher, administrator, policy analyst, and mediator. III. They help individuals, groups, communities, organizations, social movements, and possess multiple skills for micro, mezzo and macro level practice. IV. As an approach it appreciates the multidimensionality of human experience, and we try to respond to each client as a whole with physical, psychological, social, economic and spiritual concerns.",
    choices: [
        "I",
        "II and III",
        "II and IV",
        "I, III and IV",
        "All of the choices"
    ],
    answer: 4,
    explanation: "All of the statements describe aspects of generalist social work practice."
},
{
    number: 30,
    question: "Which do you think is least inapplicable in strengths perspective? I. Every individual, group, family and community has its strength. II. Trauma and abuse, illness and struggle may be injurious but they may also be sources of challenge and opportunity. III. Assume that you do not know the upper limits of the capacity to grow and change and take individual, group, and community aspirations seriously. IV. We best serve clients by collaborating with them. V. Every environment is full of resources.",
    choices: [
        "I",
        "II",
        "III",
        "IV",
        "All of the above"
    ],
    answer: 4,
    explanation: "All of the statements are consistent with the strengths perspective in social work."
},
{
    number: 31,
    question: "It views individuals, families, and small groups as having transitional problems and needs as they move from one life stage to another, e.g., individual undergoing developmental changes, crisis through maturation process while families have life cycle. It focuses on maladaptive interpersonal problems and needs in families and groups, i.e., interpersonal conflicts power struggles, distortions in communication and discrimination.",
    choices: [
        "Ecological Model",
        "Interactional level transaction",
        "Sociocultural level transaction",
        "None of the above",
        "Both b and c"
    ],
    answer: 0,
    explanation: "The Ecological Model considers individuals, families, and groups within their developmental stages and the interactions between people and their environments."
},
{
    number: 32,
    question: "Is characterized by the cycle of violence, which has three phases: (1) the tension-building phase; (2) the acute battering incident; and (3) the tranquil, loving (or, at least, nonviolent) phase",
    choices: [
        "Battered wife syndrome",
        "Stockholm syndrome",
        "Heritability",
        "Copenhagen syndrome",
        "Both b and c"
    ],
    answer: 0,
    explanation: "Battered wife syndrome is characterized by the cycle of violence involving tension-building, acute battering, and a tranquil or nonviolent phase."
},
{
    number: 33,
    question: "Refers to symptoms that may occur in a person who is in a hostage situation or otherwise held prisoner. Typically, these feelings can be described as sympathy toward captors or the development of a bond with the captor or captors.",
    choices: [
        "Battered wife syndrome",
        "Stockholm syndrome",
        "Heritability",
        "Copenhagen syndrome",
        "Both b and c"
    ],
    answer: 1,
    explanation: "Stockholm syndrome refers to the development of sympathy, positive feelings, or an emotional bond toward captors during a hostage or captivity situation."
},
{
    number: 34,
    question: "Is a serious brain injury caused by forcefully and violently shaking a baby. Other names for this condition include abusive head trauma, shaken impact syndrome, and whiplash shake syndrome. A form of child abuse that causes severe brain damage;",
    choices: [
        "Abused child syndrome",
        "Battered baby syndrome",
        "Shaken baby syndrome",
        "Damaged infant syndrome",
        "Both b and c"
    ],
    answer: 2,
    explanation: "Shaken baby syndrome is a form of abusive head trauma caused by violently shaking an infant and can result in severe brain damage."
},
{
    number: 35,
    question: "Part of the ego’s repertoire of mechanisms for protecting the individual from anxiety by keeping intolerable or unacceptable impulses or threats from conscious awareness.",
    choices: [
        "Defenses",
        "Object Relations",
        "Defensive Functioning",
        "Repression",
        "Synthetic/Integrative Function"
    ],
    answer: 0,
    explanation: "Defenses are mechanisms used by the ego to protect the individual from anxiety by keeping unacceptable impulses or threats outside conscious awareness."
},
{
    number: 36,
    question: "The individual at this level has internalized the rules and expectations of others, especially authority figures.",
    choices: [
        "Preconventional Level",
        "Conventional Level",
        "Post-conventional Level",
        "Formal Conventional Level",
        "Final Conventional Level"
    ],
    answer: 1,
    explanation: "At the Conventional Level, individuals have internalized rules and expectations of others, particularly authority figures."
},
{
    number: 37,
    question: "Which of the following is not a function of eco-map?",
    choices: [
        "It presents a diagram of the client’s social networks, including the salient boundaries of the client’s situation and to specify how the systems interact, fail to interact, or are needed to interact in response to client’s needs.",
        "To clarify the supports and stresses in the client’s environment.",
        "It identifies and organizes relevant environmental factors outside of the community and national context.",
        "It shows the direction in which the resources flow.",
        "Both b and c"
    ],
    answer: 2,
    explanation: "The statement about identifying and organizing environmental factors outside of the community and national context is not identified as a function of the eco-map in the provided material."
},
{
    number: 38,
    question: "Generally, one where core members are distributed in two or more nation states but continue to share strong bonds of collective welfare and unity. It is also a strategic response to the changing social, economic and political conditions of a globalising world.",
    choices: [
        "Single parenting family",
        "Transnational family",
        "Family",
        "Cohabiting",
        "Live in couple"
    ],
    answer: 1,
    explanation: "A transnational family has core members distributed across two or more nation states while maintaining strong bonds of collective welfare and unity."
},
{
    number: 39,
    question: "Fear, worry, and stress are normal responses to perceived or real threats, and at times when we are faced with uncertainty or the unknown. So it is normal and understandable that people are experiencing fear in the context of the",
    choices: [
        "COVID-19 pandemic.",
        "Tuberculosis",
        "Mild symptoms of cough and cold",
        "Insomnia",
        "Both b and c"
    ],
    answer: 0,
    explanation: "Fear, worry, and stress are normal and understandable responses to uncertainty and perceived threats during the COVID-19 pandemic."
},
{
    number: 40,
    question: "Physical distancing helps limit the spread of COVID-19 – this means we keep a distance of at least____ from each other and avoid spending time in crowded places or in groups.",
    choices: [
        "1 meter",
        "6 meters",
        "8 meters",
        "10 meters",
        "Both a and c"
    ],
    answer: 0,
    explanation: "The provided material identifies at least 1 meter as the recommended physical distance."
},
{
    number: 41,
    question: "In order to manifest the appropriate surface value toward others, one has to practice __________, that is to sense or perceive what another person is feeling or thinking.",
    choices: [
        "Pakikipagkapwa-tao",
        "Kagandahang Loob",
        "Pakikiramdam",
        "Pagkamakatao",
        "Both b and c"
    ],
    answer: 2,
    explanation: "Pakikiramdam refers to sensing or perceiving what another person is feeling or thinking."
},
{
    number: 42,
    question: "It posits that human relationships, including friendships, are formed by a cost-benefit analysis where we want to maximize benefits and minimize costs.",
    choices: [
        "Balance Theory",
        "Social Exchange Theory",
        "Equity Theory",
        "Social Penetration Theory",
        "Both c and d"
    ],
    answer: 1,
    explanation: "Social Exchange Theory explains relationships in terms of maximizing benefits and minimizing costs."
},
{
    number: 43,
    question: "A general belief about the characteristics of men and women. It strongly held overgeneralization about women and men.",
    choices: [
        "Gender Belief System",
        "Gender Stereotype",
        "Gender Roles",
        "Gender Identity",
        "Both b and d"
    ],
    answer: 1,
    explanation: "A gender stereotype is a strongly held overgeneralization about the characteristics or behaviors of men and women."
},
{
    number: 44,
    question: "Erikson held that our ego is a positive force that creates a self-identity, a sense of “I.” As the center of our personality, our ego helps us adapt to the various conflicts and crises of life and keeps us from losing our identity to the leveling forces of society. Erikson identified three interrelated aspects of ego. The aspect that represents the image we have of ourselves in comparison with an established ideal which is also responsible for our being satisfied or dissatisfied not only with our physical self but with our entire personal identity is called:",
    choices: [
        "Body ego",
        "Ego ideal",
        "Ego identity",
        "Egocentricity"
    ],
    answer: 1,
    explanation: "The ego ideal represents the image a person has of themselves in comparison with an established ideal and contributes to feelings of satisfaction or dissatisfaction with the self."
},
{
    number: 45,
    question: "This is an interesting stage for the child, because they develop a conscience about their moral limits in the world. This is the time when a child is curious, imaginative, and inquisitive. They often ask themselves or others the critical scientific question—‘Why?’—Therefore, the child tends to be into everything and perhaps wants to do (master) everything, such as paint or draw, build puzzles, fly a kite, etc. With that, the child begins to develop an idea of planning ahead (on a small scale), with an intention or a sense of purpose. In fact purpose is the virtue of this stage, which is led by imagination and playfulness. Now, since the child develops a conscience and begins a mastery over the environment, the child will observe, critique, and judge his or her own self. This new sense of curiosity and mastery is tempered by a guilty feeling, if the child does not accomplish a goal. He claims that the newly realized freedom and authority of the child is inevitably met with anxiety, especially when the child experiences their shortcomings",
    choices: [
        "Initiative vs. Guilt",
        "Industry vs. Inferiority",
        "Identity vs. Identity Confusion",
        "Integrity vs. Despair",
        "Both b and c"
    ],
    answer: 0,
    explanation: "Initiative vs. Guilt is the stage characterized by curiosity, imagination, playfulness, developing a sense of purpose, and feelings of guilt when goals are not accomplished."
},
{
    number: 46,
    question: "Another way to deal with insecurities and anxiety is to try to force your power onto others in hopes of feeling good about yourself. Those with this personality style come across as bossy, demanding, selfish, and even cruel. This theorist argued that these people project their own hostilities (which she called externalization) onto others and therefore use this as a justification to ‘get them before they get me.’ Once again, relationships appear doomed from the beginning.",
    choices: [
        "Moving toward",
        "Moving against",
        "Moving away",
        "Moving with",
        "Moving beyond"
    ],
    answer: 1,
    explanation: "Moving against involves dealing with insecurity and anxiety by attempting to gain power over others, often appearing bossy, demanding, selfish, or cruel."
},
{
    number: 47,
    question: "Attachment is characterized by: I. The need to maintain proximity of distance, II. Distress upon inexplicable separation, III. Pleasure or joy upon reunion and grief and loss IV. Ambiguous loss",
    choices: [
        "IV",
        "I",
        "I and II",
        "III, IV and V",
        "All of the choices"
    ],
    answer: 4,
    explanation: "The provided material identifies all of the listed characteristics as associated with attachment."
},
{
    number: 48,
    question: "He worked on the little child Albert, he is a 9-month-old baby with no natural fear of rats, rabbits, dogs or monkeys, but Albert was so afraid of loud noises. He put a rat near the boy and then hit a steel bar with a hammer, creating a loud unpleasant sound. After such condition Albert was conditioned and began to cry at the sight of the white rat.",
    choices: [
        "John Watson",
        "B.F Skinner",
        "Melanie Watson",
        "Ivan Pavlov",
        "John Hopkins"
    ],
    answer: 0,
    explanation: "John Watson conducted the Little Albert experiment, demonstrating conditioned emotional responses."
},
{
    number: 49,
    question: "Says meaningful words like “papa and mama”.",
    choices: [
        "7- 12 months",
        "10 months",
        "4 months",
        "0-6 months",
        "5- 7 months"
    ],
    answer: 0,
    explanation: "The provided material identifies 7–12 months as the period when a baby says meaningful words such as “papa” and “mama.”"
},
{
    number: 50,
    question: "When does the baby start to crawl?",
    choices: [
        "9 months",
        "10 months",
        "4 months",
        "0-6 months",
        "2 months"
    ],
    answer: 3,
    explanation: "The provided material identifies 0–6 months as the answer for when the baby starts to crawl."
},
{
    number: 51,
    question: "Crisis Intervention theory posits that people’s reactions to crises typically go through several stages, though theorists differ as to whether three or four stages are involved. Which of the following refers to Stage 3?",
    choices: [
        "The initial rise in tension is accompanied by shock and perhaps even denial of the crisis-provoking event.",
        "To reduce the tension, the individual resorts to his or her usual emergency problem-solving skills. When they fail to alleviate the tension, heightened tension ensues.",
        "The individual experiences tension so severe that the person feels confused, overwhelmed, helpless, angry, or perhaps acutely depressed. The length of this phase varies according to the nature of the hazardous event, the strengths and coping capacities of the person, and the degree of responsiveness from social support system.",
        "The social worker’s intervention is not anymore needed."
    ],
    answer: 2,
    explanation: "Stage 3 occurs when tension becomes severe and the individual may feel confused, overwhelmed, helpless, angry, or acutely depressed."
},

{
    number: 52,
    question: "He is an ego psychologist who developed one of the most popular and influential theories of development. Who is he?",
    choices: [
        "Sigmund Freud",
        "Abraham Maslow",
        "Erik Erikson",
        "John Piaget"
    ],
    answer: 2,
    explanation: "Erik Erikson was an ego psychologist who developed the influential psychosocial theory of human development."
},

{
    number: 53,
    question: "He is the proponent of cognitive development, suggests that intelligence changes as children grow. A child's cognitive development is not just about acquiring knowledge, the child has to develop or construct a mental model of the world. Who is he?",
    choices: [
        "Sigmund Freud",
        "Abraham Maslow",
        "Erik Erikson",
        "John Piaget"
    ],
    answer: 3,
    explanation: "John Piaget developed the theory of cognitive development, emphasizing how children construct mental models of the world as they develop."
},

{
    number: 54,
    question: "He is the proponent of Psychoanalytic theory that is recognized as the theory of personality organization and the dynamics of personality development that guides psychoanalysis, a clinical method for treating psychopathology. Who is he?",
    choices: [
        "Sigmund Freud",
        "Abraham Maslow",
        "Erik Erikson",
        "John Piaget"
    ],
    answer: 0,
    explanation: "Sigmund Freud is the proponent of psychoanalytic theory, which explains personality organization and personality development."
},

{
    number: 55,
    question: "He is the proponent of Hierarchy of Needs that is the focus of a motivational theory in psychology comprising a five-tier model of human needs, often depicted as hierarchical levels within a pyramid. Who is he?",
    choices: [
        "Sigmund Freud",
        "Abraham Maslow",
        "Erik Erikson",
        "John Piaget"
    ],
    answer: 1,
    explanation: "Abraham Maslow proposed the Hierarchy of Needs, a five-tier model of human motivation."
},

{
    number: 56,
    question: "The stage that occurs between birth and one year of age is concerned with:",
    choices: [
        "Trust vs. Mistrust",
        "Autonomy vs. Shame and Doubt",
        "Initiative vs. Guilt",
        "Identity vs. Role Confusion"
    ],
    answer: 0,
    explanation: "According to Erikson, infancy from birth to approximately one year centers on Trust vs. Mistrust."
},

{
    number: 57,
    question: "Erikson’s number of lifespan stages.",
    choices: [
        "Four",
        "Eight",
        "Ten",
        "Twelve"
    ],
    answer: 1,
    explanation: "Erik Erikson identified eight psychosocial stages across the human lifespan."
},

{
    number: 58,
    question: "Erik Erikson’s interest in identity developed as a result of:",
    choices: [
        "Discovering his parents had lied to him about his parentage.",
        "His early wandering throughout Europe.",
        "Studies of displaced social groups in the United States.",
        "All of the above."
    ],
    answer: 1,
    explanation: "Erikson's early wandering throughout Europe contributed to his developing interest in identity."
},

{
    number: 59,
    question: "According to Erikson, what is the major conflict faced during adolescence?",
    choices: [
        "Autonomy vs. Shame and Doubt",
        "Intimacy vs. Isolation",
        "Identity vs. Role Confusion",
        "Generativity vs. Stagnation"
    ],
    answer: 2,
    explanation: "Adolescence is characterized by Erikson's Identity vs. Role Confusion stage."
},

{
    number: 60,
    question: "The central conflict in the eighth stage of Erikson’s theory focuses on integrity vs. despair and involves reflecting back on your life. Those who are unsuccessful at resolving this conflict will look back with regret, anger, and bitterness. Those who are successful will feel a sense of satisfaction with the life they have lived. According to Erikson, those who are successful in this stage emerge with ______________.",
    choices: [
        "Hope",
        "Fidelity",
        "Purpose",
        "Wisdom"
    ],
    answer: 3,
    explanation: "Successfully resolving Integrity vs. Despair in old age leads to the virtue of wisdom."
},

{
    number: 61,
    question: "As a societal institution, the family is responsible for meeting the instrumental and expressive needs of its members. This consists of all of the following EXCEPT:",
    choices: [
        "Procreation",
        "Protection",
        "Socialization",
        "Education",
        "All of the above"
    ],
    answer: 4,
    explanation: "The provided source identifies procreation, protection, socialization, and education as family functions, so the supplied answer is All of the above."
},

{
    number: 62,
    question: "The client cries every time he hears the song entitled “A Whole New World,” as it became their favorite song with his wife who was hit at a crossfire during Marawi siege. The conditioned stimulus is ______________?",
    choices: [
        "The song",
        "Broken-hearted",
        "Missing her",
        "Sense of hearing",
        "The memories of love and care of his wife"
    ],
    answer: 0,
    explanation: "The song became associated with the traumatic experience and therefore serves as the conditioned stimulus."
},

{
    number: 63,
    question: "The unconditioned response is ______________?",
    choices: [
        "The song",
        "Broken-hearted",
        "Cries",
        "Sense of hearing",
        "The memories of love and care of his wife"
    ],
    answer: 2,
    explanation: "Crying is identified in the source as the unconditioned response."
},

{
    number: 64,
    question: "The conditioned response is _________________?",
    choices: [
        "The song",
        "Broken-hearted",
        "Cries",
        "Missing and continuously playing the song",
        "The memories of love and care of his wife"
    ],
    answer: 2,
    explanation: "Crying in response to the previously associated song is identified as the conditioned response."
},

{
    number: 65,
    question: "Believed to be more conservative. They are viewed as leaders who follow rules. They submit to authority. They are often more ambitious than other birth order positions and also more conforming. Tend to be more motivated to achieve than later borns. They are usually good at pleasing adults and behaving in socially appropriate ways. They typically adhere to rules and expect the same from others. They are also the dethroned child who must deal with the birth of a second sibling. Because of this, they work hard to stay ahead of the other siblings and keep their special place.",
    choices: [
        "First born",
        "Middleborn",
        "Last born",
        "The only born",
        "The favorite child of the parents"
    ],
    answer: 0,
    explanation: "The first-born child is described as more conservative, ambitious, conforming, and motivated to achieve."
},

{
    number: 66,
    question: "Are considered more rebellious and more likely to challenge authority. They often have a more difficult time finding their place of significance in the family. They are often the peacemakers in the family and become experts at negotiation. They learn to be competitive because they have to keep up with their older sibling while trying to stay ahead of younger siblings. They are particularly at risk for becoming discouraged. They must find a way to measure up to the accomplishments or find a place of significance through other means.",
    choices: [
        "First born",
        "Middleborn",
        "Last born",
        "The only born",
        "The favorite child of the parents"
    ],
    answer: 1,
    explanation: "Middleborn children are described as competitive, adaptable, and often skilled at negotiation and peacemaking."
},

{
    number: 67,
    question: "Are often viewed as pampered, dependent, immature, and irresponsible. They tend to be more sociable and usually get the most attention. Others often do things for them. They learn to use this to their advantage and often use charm and manipulation to get people to do things for them.",
    choices: [
        "First born",
        "Middleborn",
        "Last born/ youngest/ the only",
        "The other",
        "The favorite child of the parents"
    ],
    answer: 2,
    explanation: "The last-born or youngest child is described as receiving more attention and often being viewed as dependent or pampered."
},

{
    number: 68,
    question: "Likes being the center of adult attention. Often has difficulty sharing with siblings and peers. Prefers adult company and uses adult language.",
    choices: [
        "First born",
        "Middleborn",
        "Last born/ youngest",
        "The only",
        "The favorite child of the parents"
    ],
    answer: 3,
    explanation: "The only child is described as enjoying adult attention, preferring adult company, and having difficulty sharing."
},

{
    number: 69,
    question: "The Sustainable Development Goals (SDGs), also known as _____________, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. What is the other name of Sustainable Development Goal?",
    choices: [
        "The Global Goals",
        "Development Goals",
        "Sustainable Goals",
        "Earth Goals"
    ],
    answer: 0,
    explanation: "The Sustainable Development Goals are also known as the Global Goals."
},

{
    number: 70,
    question: "It is way human interactions and relationships transform cultural and social institutions over time, having a profound impact on society. Sociologists define social change as changes in human interactions and relationships that transform cultural and social institutions.",
    choices: [
        "Developmental Improvement",
        "Community Development",
        "Social Change",
        "Societal Goal"
    ],
    answer: 2,
    explanation: "Social change refers to transformations in human interactions, relationships, and social and cultural institutions over time."
},

{
    number: 71,
    question: "He is the founder of positivism, a philosophical and political movement which enjoyed a very wide diffusion in the second half of the nineteenth century and is considered the Father of Sociology. Who is he?",
    choices: [
        "Karl Marx",
        "Auguste Comte",
        "Emile Durkheim",
        "Herbert Spencer"
    ],
    answer: 1,
    explanation: "Auguste Comte is recognized as the founder of positivism and is commonly regarded as the Father of Sociology."
},

{
    number: 72,
    question: "Herbert Spencer is famous for his doctrine which asserted that the principles of evolution, including natural selection, apply to human societies, social classes, and individuals as well as to biological species developing over geologic time. What is the name of his doctrine?",
    choices: [
        "Social Darwinism",
        "Social Change",
        "Social Amelioration",
        "Social Politics"
    ],
    answer: 0,
    explanation: "Herbert Spencer is associated with Social Darwinism, applying evolutionary principles to human societies."
},

{
    number: 73,
    question: "A French social scientist who developed a vigorous methodology combining empirical research with sociological theory. He is widely regarded as the founder of the French school of sociology. Along with Karl Marx and Max Weber, he formally established the academic discipline and is commonly cited as the principal architect of modern social science and considered one of the Fathers of sociology. Who is he?",
    choices: [
        "Karl Marx",
        "Auguste Comte",
        "Emile Durkheim",
        "Herbert Spencer"
    ],
    answer: 2,
    explanation: "Emile Durkheim is recognized as one of the principal founders of modern sociology and developed an influential empirical approach to sociological study."
},

{
    number: 74,
    question: "It involves dealing with stress by transferring strong feelings about one situation onto another, usually less threatening, substitute situation.",
    choices: [
        "Displacement",
        "Dissociation",
        "Identification",
        "Reaction Formation",
        "All of the above"
    ],
    answer: 0,
    explanation: "Displacement involves transferring emotional reactions from the original source of stress to a safer or less threatening substitute."
},

{
    number: 75,
    question: "Is the attempt to take back an unconscious behavior or thought that is unacceptable or hurtful.",
    choices: [
        "Undoing",
        "Identification",
        "Cognitive Dissonance",
        "Justification",
        "All of the above"
    ],
    answer: 0,
    explanation: "Undoing is a defense mechanism involving an attempt to symbolically take back or cancel an unacceptable thought or behavior."
},
{
        number: 76,
        question: "Autonomy versus Shame is a psychosocial crises of what age?",
        choices: [
            "Infancy: Birth – 2 Years",
            "Play-age: 4-6 years",
            "Early Childhood – 2-4 years",
            "School Age – 6-12 years",
            "All of the above"
        ],
        answer: 2,
        explanation: "Autonomy vs. Shame and Doubt is associated with early childhood, approximately ages 2–4."
    },
    {
        number: 77,
        question: "These include the need for things that reflect on personal worth, social recognition, and accomplishment.",
        choices: [
            "Esteem Needs",
            "Self- Actualizing Needs",
            "Security Needs",
            "Love /Belongingness Needs",
            "All of the above"
        ],
        answer: 0,
        explanation: "Esteem needs involve personal worth, recognition, accomplishment, and respect."
    },
    {
        number: 78,
        question: "It consists of the interactions between the different parts of a person's microsystem. It is where a person's individual microsystems do not function independently, but are interconnected and assert influence upon one another. These interactions have an indirect impact on the individual.",
        choices: [
            "Microsystem",
            "Exosystem",
            "Mesosystem",
            "Macrosystem",
            "All of the above"
        ],
        answer: 2,
        explanation: "The mesosystem consists of interactions and connections among the individual's microsystems."
    },
    {
        number: 79,
        question: "At this stage, babies are unselective. They will respond in the same way to any human who can meet their needs reliably.",
        choices: [
            "First three months",
            "Three to six months",
            "Six months to two years",
            "Two to four years",
            "a and b"
        ],
        answer: 0,
        explanation: "The provided answer identifies the first three months as the stage when babies are unselective in their responses."
    },
    {
        number: 80,
        question: "This is the beginning of the development of the attachment bond.",
        choices: [
            "First three months",
            "Three to six months",
            "Six months to two years",
            "Two to four years"
        ],
        answer: 1,
        explanation: "The provided answer identifies three to six months as the beginning of the development of the attachment bond."
    },
    {
        number: 81,
        question: "A and B Is a type of severe child abuse that occurs when a caregiver violently shakes a child. The condition can cause swelling, bruising and bleeding in a baby's brain, and it can lead to brain damage, lifelong disabilities and even death.",
        choices: [
            "Baby Shaken Syndrome",
            "Baby Shark Syndrome",
            "Baby Victim Syndrome",
            "Baby Syndrome of Victimization",
            "None of the Above"
        ],
        answer: 0,
        explanation: "The provided answer identifies Baby Shaken Syndrome as the condition described."
    },
    {
        number: 82,
        question: "One of the provisions of the Bayanihan to Heal as One Act is the distribution of Social Amelioration Program to those who are directly affected with the pandemic. The program gives power to the Department of Social Welfare and Development, DILG and LGUs to administer the distribution of the cash assistance. With the limited budget per municipality, the number of beneficiaries also are limited. Based on the guidelines, the identification of the qualified grantees is tasked to:",
        choices: [
            "Department of Social Welfare and Development",
            "Department of Local Government Unit",
            "Local Government Units",
            "Barangay Local Government Units",
            "None of the Above"
        ],
        answer: 3,
        explanation: "The provided answer identifies Barangay Local Government Units as responsible for identifying qualified grantees."
    },
    {
        number: 83,
        question: "A field of critical that emerged in the early 1990's out of the field of LGBT studies and feminist studies. Seeks to explore and contest categorization of gender and sexuality and asserts that identities are much too complex and multi-layered to be categorized.",
        choices: [
            "Psychosexual Theory of Development",
            "Psychosocial Theory of Development",
            "Queer Theory",
            "Feminist Theory",
            "None of the above"
        ],
        answer: 2,
        explanation: "Queer Theory examines and challenges conventional categories of gender and sexuality."
    },
    {
        number: 84,
        question: "The longest urban battle in the modern history of the Philippines.",
        choices: [
            "Battle of Mactan",
            "Mangundadatu Massacre",
            "Ampatuan Massacre",
            "Marawi Siege on May 23, 2017",
            "None of the above"
        ],
        answer: 3,
        explanation: "The provided answer identifies the Marawi Siege, which began on May 23, 2017."
    },
    {
        number: 85,
        question: "This includes the six skills (Tracking, resourcing and resource intensification, grounding, gesture and spontaneous movements, AMP down/Ramp Up / Shift and Stay) that come from the Trauma Resiliency Model.",
        choices: [
            "Community Resiliency Model",
            "Relentlessly Participative Model",
            "Restitution Model",
            "Trauma Informed Care Model",
            "None of the above"
        ],
        answer: 0,
        explanation: "The provided answer identifies the Community Resiliency Model."
    },
    {
        number: 86,
        question: "Is a condition in which hostages develop a psychological bond with their captors during captivity.",
        choices: [
            "Abused child syndrome",
            "Battered baby syndrome",
            "Shaken baby syndrome",
            "Damaged infant syndrome",
            "Stockholm Syndrome"
        ],
        answer: 4,
        explanation: "Stockholm Syndrome describes a psychological bond that may develop between hostages and their captors."
    },
    {
        number: 87,
        question: "Is a term for different social and economic ideas. Characterized by free market trade, deregulation of financial markets, mercantilism, decomodying goods and services and the shift away from state welfare provision.",
        choices: [
            "Capitalism",
            "Sustainable development",
            "Neoliberalism",
            "Rights-based approach to development",
            "Both b and c"
        ],
        answer: 2,
        explanation: "Neoliberalism emphasizes free-market principles, deregulation, and reduced state welfare provision."
    },
    {
        number: 88,
        question: "In September 2015, the General Assembly adopted the 2030 Agenda for Sustainable Development. These Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including poverty, inequality, climate change, environmental degradation, peace and justice. These include?",
        choices: [
            "19 goals",
            "3 goals",
            "17 goals",
            "16 goals",
            "Both b and c"
        ],
        answer: 2,
        explanation: "The 2030 Agenda for Sustainable Development contains 17 Sustainable Development Goals."
    },
    {
        number: 89,
        question: "Postmodernity is characterized by _______.",
        choices: [
            "The notion that history is driven by clashing between opposing forces.",
            "A questioning of the power and relevance of social movement organization",
            "Great cultural conflict that leads to social isolation and stagnant.",
            "A questioning of the notion that society is always progressing forward, building on its knowledge and inventions of the past to create a better future.",
            "Both b and c"
        ],
        answer: 3,
        explanation: "Postmodernity questions the idea of continuous social progress and the assumption that history necessarily moves toward a better future."
    },
    {
        number: 90,
        question: "It is team process where groups feel that they are part of the team and realized that they can achieve wok if they accept other viewpoint.",
        choices: [
            "Forming",
            "Storming",
            "Performing",
            "Norming",
            "both b and c"
        ],
        answer: 3,
        explanation: "Norming is the stage where team members develop cohesion, accept different viewpoints, and establish effective ways of working together."
    },
    {
        number: 91,
        question: "Someone with this personality type is usually a people person. They seek interpersonal harmony and close relationships. They are loyal spouses and loving parents. They preserve their relationships with old friends, distant family members, and neighbors. People with this temperament tend to avoid conflicts and always try to mediate between others to restore peace and harmony.",
        choices: [
            "Sanguine",
            "Phlegmatic",
            "Choleric",
            "Melancholic",
            "Phlectonic"
        ],
        answer: 1,
        explanation: "The phlegmatic temperament is commonly characterized by calmness, sociability, loyalty, and a preference for harmony."
    },
    {
        number: 92,
        question: "The GATHER approach to counseling--has documented effectiveness in Family Planning programs. The more of the GATHER elements a counselor uses, the more satisfied clients are with their care and the more likely they are to use contraception. What does GATHER stand for?",
        choices: [
            "Greet, Ask, Tell, Help, Explain, and Return",
            "Great, Answer, Tell, Help, Explain and Receive",
            "Greet, Accept, Tell, Help, Explain, and Return",
            "Give, Answer, Tell, Help, Explain and Receive",
            "Give, Accept, Tell, Help, Explain, and Return"
        ],
        answer: 0,
        explanation: "GATHER stands for Greet, Ask, Tell, Help, Explain, and Return."
    },
    {
        number: 93,
        question: "Jose was a product of a broken home. His mother tried very hard to support his school needs. Before going home, he usually does his assignment at school, usually in a spare classroom. One afternoon, a security guard was interrogating him about a lost cellular phone which was unintentionally left in the very room that he is occupying. Jose denied the accusation. He cannot afford to mar their family name. He thought, he was able to clear his name already. But the following day, the polite silence among his classmates became unbearable. And it was just the start. In the whole campus, the day thereafter, he can feel the unspoken labeling even among his acquaintances. Jose was entertaining the idea of really doing it the next time around. It seems that Jose is prone to do:",
        choices: [
            "Primary deviance",
            "Secondary deviance",
            "Career deviance",
            "Cultural deviance",
            "Both b and c"
        ],
        answer: 1,
        explanation: "Secondary deviance occurs when labeling and social reactions contribute to continued or further deviant behavior."
    },
    {
        number: 94,
        question: "It refers to rationalizing or making excuses for their deviance in ways that both relieve the feelings of guilt of the individual, and turn aside other people's expressions of disapproval.",
        choices: [
            "Boundary maintenance",
            "Pure deviance",
            "Falsely accused",
            "Neutralization",
            "Both b and c"
        ],
        answer: 3,
        explanation: "Neutralization involves rationalizations or excuses used to justify deviant behavior and reduce guilt."
    },
    {
        number: 95,
        question: "Is a way to make guesses about the future or about some hypothetical situation based on data that you already know. You're basically taking your “best guess”. For example, let's say your pay increases average $200 per year. Or another example of this would be. John observed his current performance in his mathematics class and at his current rating for this grading period. He then says, \"Guess I'll have a 'B' at the end of this year.\" John is predicting, therefore he is?",
        choices: [
            "Guessing",
            "Extrapolating",
            "Interpolating",
            "Modeling",
            "a and b"
        ],
        answer: 1,
        explanation: "Extrapolating involves using known data or trends to make predictions about future values or situations."
    },
    {
        number: 96,
        question: "Refers to a person’s belief about his or her ability to perform behaviors that lead to expected outcomes.",
        choices: [
            "Self-Efficacy",
            "Synergy",
            "Development",
            "Symbolic Interactionism",
            "Equifinality"
        ],
        answer: 0,
        explanation: "Self-efficacy refers to a person's belief in their ability to perform behaviors that produce expected outcomes."
    },
    {
        number: 97,
        question: "The theory holds that individuals respond not directly to the actions of others, but to their subjective interpretations of these actions. In this theory, human interaction is mediated by the use of symbols, which are used to communicate commonly understood meanings within a society. The famous proponent of this is Irving Goffman.",
        choices: [
            "Self-Efficacy",
            "Synergy",
            "Development",
            "Symbolic Interactionism",
            "Equifinality"
        ],
        answer: 3,
        explanation: "Symbolic Interactionism emphasizes how people interpret actions and communicate through shared symbols."
    },
    {
        number: 98,
        question: "He theorized, in his theory, that society puts pressure on individuals to achieve socially accepted goals (such as the American dream), though they lack the means. This leads to strain which may lead individuals to commit crimes, like selling drugs or becoming involved in prostitution as a means to gain financial security.",
        choices: [
            "Imee Foxtrot in her Neutralization Theory",
            "Robert Sutherland in his Stringent theory",
            "Robert Mestrung in his Differential Association Theory",
            "Robert Merton in his Strain Theory",
            "Edwin Sutherland in his Chaos Theory"
        ],
        answer: 3,
        explanation: "Robert Merton's Strain Theory explains how a gap between culturally accepted goals and legitimate means can create strain that may contribute to deviance."
    },
    {
        number: 99,
        question: "This theory developed by _________________ proposes that through interaction with others, individuals learn the values, attitudes, techniques, and motives for criminal behavior.",
        choices: [
            "Imee Foxtrot in her Neutralization Theory",
            "Robert Sutherland in his Stringent theory",
            "Robert Mestrung in his Differential Association Theory",
            "Robert Merton in his Strain Theory",
            "Edwin Sutherland in his Differential Associated Theory"
        ],
        answer: 4,
        explanation: "Edwin Sutherland's Differential Association Theory proposes that criminal behavior is learned through interaction with others."
    },
    {
        number: 100,
        question: "He attempted to explain juvenile delinquency based on examining body type and physique and particular pattern of mental and behavioural characteristics and temperaments;",
        choices: [
            "Matza",
            "John Dewey",
            "Norton",
            "Robert Merton",
            "William Sheldon"
        ],
        answer: 4,
        explanation: "William Sheldon studied relationships between body types, physique, temperament, and behavior."
    }
];