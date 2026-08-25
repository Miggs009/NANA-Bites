const flashcards = [
    {
        number: 1,
        question: "What is the primary focus of the ecological perspective in social work?",
        choices: [
            "Individual's internal processes",
            "Interactions between individuals and their environments",
            "Biological factors",
            "Cultural traditions"
        ],
        answer: 1,
        explanation: "The ecological perspective focuses on the interaction between individuals and the environments in which they live."
    },
    {
        number: 2,
        question: "Which of the following is a key principle of the strengths-based approach in social work?",
        choices: [
            "Focusing on deficits",
            "Highlighting client problems",
            "Building on client strengths and resources",
            "Ignoring environmental factors"
        ],
        answer: 2,
        explanation: "The strengths-based approach emphasizes the client's abilities, strengths, resources, and potential rather than focusing primarily on deficits."
    },
    {
        number: 3,
        question: "Which model of social work practice emphasizes collaboration and mutual goal setting with clients?",
        choices: [
            "Medical model",
            "Strengths-based model",
            "Problem-solving model",
            "Psychodynamic model"
        ],
        answer: 1,
        explanation: "The strengths-based model emphasizes collaboration with clients and builds on their strengths, resources, and capacity to achieve goals."
    },
    {
        number: 4,
        question: "What is the main goal of social work intervention at the macro level?",
        choices: [
            "Providing individual therapy",
            "Conducting family counseling",
            "Implementing community and policy changes",
            "Offering case management services"
        ],
        answer: 2,
        explanation: "Macro-level social work addresses larger systems through community development, organizational change, advocacy, and policy reform."
    },
    {
        number: 5,
        question: "Which social work approach emphasizes the importance of cultural competence in practice?",
        choices: [
            "Psychodynamic approach",
            "Cognitive-behavioral approach",
            "Ecological systems approach",
            "Humanistic approach"
        ],
        answer: 2,
        explanation: "The ecological systems approach considers how individuals are affected by their broader social, cultural, and environmental contexts."
    },
    {
        number: 6,
        question: "Which term describes the process by which individuals learn deviant behavior through interactions with others?",
        choices: [
            "Differential association",
            "Social control",
            "Anomie",
            "Labeling"
        ],
        answer: 0,
        explanation: "Differential association theory proposes that deviant behavior is learned through interaction with others."
    },
    {
        number: 7,
        question: "Which theory posits that deviance occurs when societal expectations and the means to achieve them are misaligned?",
        choices: [
            "Strain theory",
            "Social learning theory",
            "Control theory",
            "Differential association theory"
        ],
        answer: 0,
        explanation: "Strain theory explains deviance as a result of a disconnect between socially approved goals and the legitimate means available to achieve them."
    },
    {
        number: 8,
        question: "Which theory focuses on the societal reaction to deviance rather than the deviant act itself?",
        choices: [
            "Labeling theory",
            "Strain theory",
            "Social learning theory",
            "Conflict theory"
        ],
        answer: 0,
        explanation: "Labeling theory focuses on how society's reactions and labels can influence how individuals are perceived and how they behave."
    },
    {
        number: 9,
        question: "Which concept describes the violation of cultural norms and expectations?",
        choices: [
            "Conformity",
            "Deviance",
            "Social control",
            "Socialization"
        ],
        answer: 1,
        explanation: "Deviance refers to behavior that violates established social or cultural norms."
    },
    {
        number: 10,
        question: "Which theory suggests that crime results from the absence of social ties and communal bonds?",
        choices: [
            "Anomie theory",
            "Control theory",
            "Differential association theory",
            "Labeling theory"
        ],
        answer: 1,
        explanation: "Control theory suggests that strong social bonds discourage individuals from engaging in deviant or criminal behavior."
    },
    {
        number: 11,
        question: "Which personality theory emphasizes the role of unconscious processes and childhood experiences in shaping personality?",
        choices: [
            "Humanistic theory",
            "Trait theory",
            "Psychoanalytic theory",
            "Behaviorist theory"
        ],
        answer: 2,
        explanation: "Psychoanalytic theory, associated with Freud, emphasizes unconscious processes and early childhood experiences."
    },
    {
        number: 12,
        question: "Which psychologist is known for developing the hierarchy of needs?",
        choices: [
            "Sigmund Freud",
            "Carl Rogers",
            "Abraham Maslow",
            "Alfred Adler"
        ],
        answer: 2,
        explanation: "Abraham Maslow developed the hierarchy of needs."
    },
    {
        number: 13,
        question: "Which personality theory focuses on the consistent and enduring characteristics of an individual?",
        choices: [
            "Humanistic theory",
            "Psychoanalytic theory",
            "Trait theory",
            "Behaviorist theory"
        ],
        answer: 2,
        explanation: "Trait theory focuses on relatively stable and enduring characteristics that influence behavior."
    },
    {
        number: 14,
        question: "Which theory posits that personality is largely shaped by reinforcements and punishments?",
        choices: [
            "Psychoanalytic theory",
            "Behaviorist theory",
            "Trait theory",
            "Humanistic theory"
        ],
        answer: 1,
        explanation: "Behaviorist theory emphasizes how reinforcement, punishment, and environmental conditioning shape behavior."
    },
    {
        number: 15,
        question: "Which personality disorder is characterized by a pervasive pattern of disregard for and violation of the rights of others?",
        choices: [
            "Narcissistic Personality Disorder",
            "Borderline Personality Disorder",
            "Antisocial Personality Disorder",
            "Obsessive-Compulsive Personality Disorder"
        ],
        answer: 2,
        explanation: "Antisocial Personality Disorder involves a pervasive pattern of disregard for and violation of the rights of others."
    },
    {
        number: 16,
        question: "Which personality disorder is characterized by excessive emotionality and attention-seeking behavior?",
        choices: [
            "Avoidant Personality Disorder",
            "Dependent Personality Disorder",
            "Histrionic Personality Disorder",
            "Schizoid Personality Disorder"
        ],
        answer: 2,
        explanation: "Histrionic Personality Disorder is characterized by excessive emotionality and a strong need for attention."
    },
    {
        number: 17,
        question: "Which personality disorder is characterized by a preoccupation with orderliness, perfectionism, and control?",
        choices: [
            "Borderline Personality Disorder",
            "Narcissistic Personality Disorder",
            "Obsessive-Compulsive Personality Disorder",
            "Schizotypal Personality Disorder"
        ],
        answer: 2,
        explanation: "Obsessive-Compulsive Personality Disorder is characterized by excessive concern with orderliness, perfectionism, and control."
    },
    {
        number: 18,
        question: "Which personality disorder is characterized by a pervasive pattern of instability in relationships, self-image, and affect, along with marked impulsivity?",
        choices: [
            "Borderline Personality Disorder",
            "Antisocial Personality Disorder",
            "Narcissistic Personality Disorder",
            "Avoidant Personality Disorder"
        ],
        answer: 0,
        explanation: "Borderline Personality Disorder is characterized by instability in relationships, self-image, emotions, and behavior, often accompanied by impulsivity."
    },
    {
        number: 19,
        question: "Which term describes an intense fear of specific objects or situations, such as spiders or flying?",
        choices: [
            "Social phobia",
            "Agoraphobia",
            "Specific phobia",
            "Generalized anxiety disorder"
        ],
        answer: 2,
        explanation: "Specific phobia involves an intense and persistent fear of a particular object or situation."
    },
    {
        number: 20,
        question: "Which phobia is characterized by an intense fear of social situations where one might be judged or scrutinized by others?",
        choices: [
            "Acrophobia",
            "Claustrophobia",
            "Social phobia",
            "Agoraphobia"
        ],
        answer: 2,
        explanation: "Social phobia, also called social anxiety disorder, involves intense fear of social situations involving possible judgment or scrutiny."
    },
    {
        number: 21,
        question: "What is the term for the fear of being in places or situations from which escape might be difficult or embarrassing?",
        choices: [
            "Claustrophobia",
            "Acrophobia",
            "Agoraphobia",
            "Social phobia"
        ],
        answer: 2,
        explanation: "Agoraphobia involves fear or anxiety about situations where escape or help may be difficult to obtain."
    },
    {
        number: 22,
        question: "Which term describes an irrational fear of confined spaces?",
        choices: [
            "Acrophobia",
            "Claustrophobia",
            "Agoraphobia",
            "Social phobia"
        ],
        answer: 1,
        explanation: "Claustrophobia is an intense fear of enclosed or confined spaces."
    },
    {
        number: 23,
        question: "Which phobia involves an irrational fear of heights?",
        choices: [
            "Claustrophobia",
            "Agoraphobia",
            "Acrophobia",
            "Aerophobia"
        ],
        answer: 2,
        explanation: "Acrophobia is an intense fear of heights."
    },
    {
        number: 24,
        question: "Which term refers to the process through which individuals learn and internalize the values, beliefs, and norms of their culture?",
        choices: [
            "Socialization",
            "Deviance",
            "Stratification",
            "Institutionalization"
        ],
        answer: 0,
        explanation: "Socialization is the process through which individuals learn and internalize the norms, values, beliefs, and behaviors of their society."
    },
    {
        number: 25,
        question: "Which concept describes the ability to understand and share the feelings of another person?",
        choices: [
            "Sympathy",
            "Empathy",
            "Altruism",
            "Compassion"
        ],
        answer: 1,
        explanation: "Empathy involves understanding and sharing another person's feelings or perspective."
    },
    {
        number: 26,
        question: "Which of the following is a primary focus of developmental psychology?",
        choices: [
            "The influence of unconscious processes on behavior",
            "The role of reinforcement and punishment in behavior",
            "The growth and change in individuals across the lifespan",
            "The classification of personality disorders"
        ],
        answer: 2,
        explanation: "Developmental psychology studies physical, cognitive, emotional, and social growth and changes across the lifespan."
    },
    {
        number: 27,
        question: "Which term refers to a state of complete physical, mental, and social well-being?",
        choices: [
            "Health",
            "Fitness",
            "Wellness",
            "Stability"
        ],
        answer: 0,
        explanation: "Health is commonly defined as a state of physical, mental, and social well-being."
    },
    {
        number: 28,
        question: "Which psychological approach emphasizes the importance of free will and individual experience in the development of personality?",
        choices: [
            "Behaviorist approach",
            "Psychoanalytic approach",
            "Humanistic approach",
            "Cognitive approach"
        ],
        answer: 2,
        explanation: "The humanistic approach emphasizes free will, personal growth, subjective experience, and individual potential."
    },
    {
        number: 29,
        question: "Which concept describes the hierarchy of social status and wealth in a society?",
        choices: [
            "Socialization",
            "Social control",
            "Social stratification",
            "Social mobility"
        ],
        answer: 2,
        explanation: "Social stratification refers to the structured ranking of people into social groups based on factors such as wealth, status, and power."
    },
    {
        number: 30,
        question: "Which of the following best describes the concept of role conflict?",
        choices: [
            "The experience of tension when the expectations of different roles conflict",
            "The process of learning new roles",
            "The ability to switch between different roles smoothly",
            "The feeling of satisfaction with one's roles"
        ],
        answer: 0,
        explanation: "Role conflict occurs when the expectations associated with two or more roles are incompatible."
    },
    {
        number: 31,
        question: "Which term refers to the adjustment of individuals to changes in their environment to achieve stability?",
        choices: [
            "Adaptation",
            "Assimilation",
            "Accommodation",
            "Integration"
        ],
        answer: 0,
        explanation: "Adaptation refers to adjusting to changes or demands in the environment in order to maintain functioning and stability."
    },
    {
        number: 32,
        question: "Which theory posits that children learn behaviors and norms through observation and imitation of others?",
        choices: [
            "Cognitive development theory",
            "Social learning theory",
            "Psychoanalytic theory",
            "Humanistic theory"
        ],
        answer: 1,
        explanation: "Social learning theory explains that people can learn behaviors through observing and imitating others."
    },
    {
        number: 33,
        question: "Which concept in sociology refers to the expectations and behaviors associated with a particular status or position?",
        choices: [
            "Role",
            "Norm",
            "Value",
            "Belief"
        ],
        answer: 0,
        explanation: "A role consists of the expectations and behaviors associated with a particular social status or position."
    },
    {
        number: 34,
        question: "Which stage of Erikson's psychosocial development theory is characterized by the conflict of trust vs. mistrust?",
        choices: [
            "Initiative vs. guilt",
            "Industry vs. inferiority",
            "Trust vs. mistrust",
            "Autonomy vs. shame and doubt"
        ],
        answer: 2,
        explanation: "Trust vs. mistrust is Erikson's first psychosocial stage and occurs during infancy."
    },
    {
        number: 35,
        question: "Which term describes a strong sense of duty and commitment to group goals, often at the expense of individual desires?",
        choices: [
            "Individualism",
            "Collectivism",
            "Humanism",
            "Realism"
        ],
        answer: 1,
        explanation: "Collectivism emphasizes group goals, social responsibilities, and the interests of the collective over individual interests."
    },
    {
        number: 36,
        question: "Which concept refers to the ability to influence others and control resources?",
        choices: [
            "Authority",
            "Power",
            "Prestige",
            "Status"
        ],
        answer: 1,
        explanation: "Power is the ability to influence others and control or access resources."
    },
    {
        number: 37,
        question: "Which psychological disorder involves excessive worry about a variety of topics, activities, or events?",
        choices: [
            "Obsessive-Compulsive Disorder",
            "Social Anxiety Disorder",
            "Generalized Anxiety Disorder",
            "Panic Disorder"
        ],
        answer: 2,
        explanation: "Generalized Anxiety Disorder involves excessive and persistent worry about multiple areas of life."
    },
    {
        number: 38,
        question: "Which of the following is a characteristic of Post-Traumatic Stress Disorder (PTSD)?",
        choices: [
            "Excessive energy and hyperactivity",
            "Re-experiencing traumatic events through flashbacks or nightmares",
            "Persistent sadness and loss of interest",
            "Difficulty concentrating and impulsive behavior"
        ],
        answer: 1,
        explanation: "PTSD can involve intrusive memories, flashbacks, nightmares, and other forms of re-experiencing a traumatic event."
    },
    {
        number: 39,
        question: "Which concept refers to the stable, enduring aspects of personality that influence behavior across situations?",
        choices: [
            "Traits",
            "States",
            "Moods",
            "Emotions"
        ],
        answer: 0,
        explanation: "Traits are relatively stable and enduring characteristics that influence behavior across different situations."
    },
    {
        number: 40,
        question: "Which stage of Kohlberg's theory of moral development is characterized by the recognition of universal ethical principles?",
        choices: [
            "Pre-conventional",
            "Conventional",
            "Post-conventional",
            "Egocentric"
        ],
        answer: 2,
        explanation: "The post-conventional level involves reasoning based on social contracts, universal principles, and ethical values."
    },
    {
        number: 41,
        question: "Which term describes the process of changing one's thoughts, feelings, and behaviors to align with group norms?",
        choices: [
            "Socialization",
            "Conformity",
            "Compliance",
            "Obedience"
        ],
        answer: 1,
        explanation: "Conformity is the process of adjusting one's behavior or attitudes to match group norms or expectations."
    },
    {
        number: 42,
        question: "Which psychological disorder is characterized by alternating periods of mania and depression?",
        choices: [
            "Major Depressive Disorder",
            "Bipolar Disorder",
            "Cyclothymic Disorder",
            "Dysthymic Disorder"
        ],
        answer: 1,
        explanation: "Bipolar disorder involves episodes of mood elevation or mania and episodes of depression."
    },
    {
        number: 43,
        question: "Which term refers to the feeling of emotional and psychological closeness to others?",
        choices: [
            "Intimacy",
            "Passion",
            "Commitment",
            "Attraction"
        ],
        answer: 0,
        explanation: "Intimacy refers to emotional closeness, connection, and psychological closeness with another person."
    },
    {
        number: 44,
        question: "Which theory posits that personality development is influenced by unconscious motives and conflicts?",
        choices: [
            "Behaviorist theory",
            "Cognitive theory",
            "Psychoanalytic theory",
            "Humanistic theory"
        ],
        answer: 2,
        explanation: "Psychoanalytic theory emphasizes unconscious motives, conflicts, and experiences in personality development."
    },
    {
        number: 45,
        question: "Which concept describes the pattern of changes in an individual's life, including biological, psychological, and social aspects?",
        choices: [
            "Life-course",
            "Social clock",
            "Maturation",
            "Developmental trajectory"
        ],
        answer: 0,
        explanation: "The life-course perspective examines patterns of biological, psychological, and social changes throughout an individual's life."
    },
    {
        number: 46,
        question: "Which term refers to a preconceived opinion that is not based on reason or actual experience?",
        choices: [
            "Stereotype",
            "Prejudice",
            "Discrimination",
            "Bias"
        ],
        answer: 1,
        explanation: "Prejudice is a preconceived judgment or attitude toward a person or group that is not based on sufficient knowledge or experience."
    },
    {
        number: 47,
        question: "Which term describes the personal sense of being male or female?",
        choices: [
            "Gender role",
            "Gender identity",
            "Sexual orientation",
            "Gender expression"
        ],
        answer: 1,
        explanation: "Gender identity refers to a person's internal sense or personal experience of their gender."
    },
    {
        number: 48,
        question: "Which concept in psychology refers to the consistency of a research study or measuring test?",
        choices: [
            "Validity",
            "Reliability",
            "Generalizability",
            "Objectivity"
        ],
        answer: 1,
        explanation: "Reliability refers to the consistency and stability of a measurement or research instrument."
    },
    {
        number: 49,
        question: "Which term describes a situation where a person must choose between two or more equally desirable or undesirable options?",
        choices: [
            "Conflict",
            "Stress",
            "Dilemma",
            "Decision"
        ],
        answer: 2,
        explanation: "A dilemma occurs when a person faces difficult choices between competing options."
    },
    {
        number: 50,
        question: "Which concept in developmental psychology refers to the genetic potential for growth and development that unfolds in a predictable pattern?",
        choices: [
            "Epigenesis",
            "Maturation",
            "Socialization",
            "Developmental trajectory"
        ],
        answer: 1,
        explanation: "Maturation refers to genetically programmed biological growth and development that unfolds in a relatively predictable sequence."
    },
    {
        number: 51,
        question: "Mary Cris notices that the community she serves lacks access to clean water. She decides to advocate for improved water infrastructure. Which social work role is Mary Cris primarily performing in this situation?",
        choices: [
            "Broker",
            "Advocate",
            "Mediator",
            "Case Manager"
        ],
        answer: 1,
        explanation: "An advocate works to promote clients' or communities' rights, needs, and access to resources and services."
    },
    {
        number: 52,
        question: "Jameston is helping a family adjust to a new cultural environment after migrating. He introduces them to cultural norms and supports them in finding community resources. Which concept is Jameston applying?",
        choices: [
            "Acculturation",
            "Assimilation",
            "Integration",
            "Cultural competence"
        ],
        answer: 0,
        explanation: "Acculturation refers to the process of learning and adapting to aspects of another culture while potentially maintaining elements of one's original culture."
    },
    {
        number: 53,
        question: "In a community, there has been an increase in vandalism among teenagers. As a social worker, how would you address this issue?",
        choices: [
            "Punish the offenders harshly to set an example",
            "Organize community forums to discuss underlying issues and possible solutions",
            "Increase police patrols in the area",
            "Ignore the behavior and hope it stops on its own"
        ],
        answer: 1,
        explanation: "Community forums can identify underlying causes, encourage participation, and help develop collaborative solutions to community problems."
    },
    {
        number: 54,
        question: "Melissa is dealing with a client who frequently engages in theft. Which theory might Melissa use to understand this behavior?",
        choices: [
            "Strain theory",
            "Labeling theory",
            "Control theory",
            "Differential association theory"
        ],
        answer: 0,
        explanation: "Strain theory can be used to understand deviant behavior as a response to blocked opportunities or difficulties achieving socially valued goals."
    },
    {
        number: 55,
        question: "Coleen is helping a client understand their behavior pattern using Freud's psychodynamic theory. The client exhibits strong, irrational fears. Which part of Freud's model might be influencing this behavior?",
        choices: [
            "Id",
            "Ego",
            "Superego",
            "Conscious"
        ],
        answer: 0,
        explanation: "The id represents unconscious instinctual drives and impulses and may contribute to behavior arising from unconscious desires or conflicts."
    },
    {
        number: 56,
        question: "Loisa is using Maslow's hierarchy of needs to help a client. The client has stable employment and a secure home but feels unfulfilled. According to Maslow, which need should Loisa address next?",
        choices: [
            "Physiological",
            "Safety",
            "Love and belonging",
            "Self-actualization"
        ],
        answer: 3,
        explanation: "Once basic physiological and safety needs are adequately met, higher-level needs such as belonging, esteem, and ultimately self-actualization become increasingly important."
    },
    {
        number: 57,
        question: "Carl is working with a client diagnosed with borderline personality disorder. The client exhibits intense emotional instability and fear of abandonment. Which approach is most effective in managing these symptoms?",
        choices: [
            "Cognitive Behavioral Therapy",
            "Dialectical Behavior Therapy (DBT)",
            "Psychoanalysis",
            "Humanistic Therapy"
        ],
        answer: 1,
        explanation: "Dialectical Behavior Therapy is specifically designed to help people with borderline personality disorder develop emotional regulation, distress tolerance, and interpersonal skills."
    },
    {
        number: 58,
        question: "A client diagnosed with narcissistic personality disorder (NPD) exhibits grandiosity and a need for admiration. How should a social worker approach treatment?",
        choices: [
            "Focus on reinforcing the client's self-esteem",
            "Set clear boundaries and focus on developing empathy",
            "Avoid confronting the client's grandiosity",
            "Emphasize the client's superiority in therapy"
        ],
        answer: 1,
        explanation: "Treatment should establish appropriate boundaries while helping the client develop healthier self-perception, interpersonal functioning, and empathy."
    },
    {
        number: 59,
        question: "Yuki, a client, has an intense fear of flying that prevents her from traveling for work. Which therapeutic approach is most appropriate for addressing her phobia?",
        choices: [
            "Exposure Therapy",
            "Psychodynamic Therapy",
            "Humanistic Therapy",
            "Cognitive Restructuring"
        ],
        answer: 0,
        explanation: "Exposure therapy gradually exposes a person to the feared object or situation in a controlled manner to reduce fear and avoidance."
    },
    {
        number: 60,
        question: "Yoshie exhibits extreme anxiety and avoidance of social situations due to social phobia. Which treatment is most effective for social phobia?",
        choices: [
            "Psychoanalysis",
            "Cognitive Behavioral Therapy (CBT)",
            "Gestalt Therapy",
            "Rational Emotive Behavior Therapy (REBT)"
        ],
        answer: 1,
        explanation: "CBT is an evidence-based approach for social anxiety that addresses anxious thoughts, avoidance, and behavioral patterns."
    },
    {
        number: 61,
        question: "Darl expresses feeling disconnected and isolated from their community. Which intervention would best help them increase their sense of belonging?",
        choices: [
            "Encouraging them to focus on individual hobbies",
            "Helping them find and join local community groups",
            "Advising them to spend more time alone to reflect",
            "Suggesting they relocate to a new community"
        ],
        answer: 1,
        explanation: "Connecting the client with community groups can increase social support, participation, and a sense of belonging."
    },
    {
        number: 62,
        question: "Kent is working with a client facing unemployment. The client feels a loss of identity and purpose. Which theory can Kent apply to help the client understand and navigate this transition?",
        choices: [
            "Social exchange theory",
            "Role theory",
            "Labeling theory",
            "Attachment theory"
        ],
        answer: 1,
        explanation: "Role theory can help explain how losing employment may disrupt an individual's social role, identity, expectations, and sense of purpose."
    },
    {
        number: 63,
        question: "A community is experiencing a rise in juvenile delinquency. As a social worker, which approach would you take to address this issue at a community level?",
        choices: [
            "Implement stricter curfew laws for teenagers",
            "Develop and promote after-school programs and activities",
            "Increase the presence of law enforcement officers in schools",
            "Focus on punitive measures for offenders"
        ],
        answer: 1,
        explanation: "After-school programs can provide positive activities, supervision, social support, and constructive opportunities for young people."
    },
    {
        number: 64,
        question: "Laura is addressing truancy in a local high school. She discovers that many students skip school due to bullying. Which strategy should Laura prioritize?",
        choices: [
            "Increasing academic workload to keep students engaged",
            "Implementing a comprehensive anti-bullying program",
            "Focusing on disciplinary actions for truancy",
            "Encouraging students to handle bullying independently"
        ],
        answer: 1,
        explanation: "Because bullying is identified as an underlying cause of truancy, addressing bullying directly through a comprehensive program is the appropriate priority."
    },
    {
        number: 65,
        question: "Lester is using Erikson's stages of psychosocial development to help a middle-aged client experiencing a crisis. The client feels stuck and unproductive. Which stage might this client be struggling with?",
        choices: [
            "Trust vs. Mistrust",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation",
            "Integrity vs. Despair"
        ],
        answer: 2,
        explanation: "Generativity vs. Stagnation is the psychosocial stage associated with adulthood and involves productivity, contribution, and concern for future generations."
    },
    {
        number: 66,
        question: "Emily notices her client has difficulty forming relationships and exhibits a strong need for approval. Using Adlerian theory, which concept might Emily explore with her client?",
        choices: [
            "Inferiority complex",
            "Superiority complex",
            "Collective unconscious",
            "Self-actualization"
        ],
        answer: 0,
        explanation: "Adlerian theory emphasizes feelings of inferiority and how individuals develop strategies to compensate for perceived shortcomings."
    },
    {
        number: 67,
        question: "Mark is treating a client with antisocial personality disorder. The client has a history of criminal behavior and lacks remorse. Which intervention is most appropriate?",
        choices: [
            "Long-term psychodynamic therapy",
            "Behavioral interventions focusing on appropriate behavior and consequences",
            "Group therapy to build emotional dependence",
            "Medication for mood stabilization"
        ],
        answer: 1,
        explanation: "Behavioral interventions can focus on observable behaviors, consequences, responsibility, and reducing harmful or antisocial actions."
    },
    {
        number: 68,
        question: "A client with avoidant personality disorder (APD) avoids social interactions due to fear of criticism and rejection. What should be the primary focus of therapy?",
        choices: [
            "Encouraging complete social withdrawal",
            "Gradual exposure to social situations with positive reinforcement",
            "Ignoring the client's fears and pushing for social interaction",
            "Medication to reduce social anxiety"
        ],
        answer: 1,
        explanation: "Gradual exposure combined with support and positive reinforcement can help clients build confidence and reduce avoidance."
    },
    {
        number: 69,
        question: "Calvin has a specific phobia of dogs that significantly impacts their daily life. The social worker decides to use systematic desensitization. What is the first step in this process?",
        choices: [
            "Exposing the client to a dog immediately",
            "Creating a hierarchy of fear-inducing situations",
            "Encouraging the client to adopt a dog",
            "Discussing the client's childhood experiences with dogs"
        ],
        answer: 1,
        explanation: "Systematic desensitization begins by developing a hierarchy of feared situations, usually progressing from least frightening to most frightening."
    },
    {
        number: 70,
        question: "Cassandra is treating a client with agoraphobia who avoids leaving home due to intense fear. Which intervention is most appropriate?",
        choices: [
            "Cognitive Behavioral Therapy (CBT) focusing on irrational thoughts",
            "Psychoanalytic therapy exploring unconscious fears",
            "Encouraging the client to face all fears at once",
            "Group therapy to discuss phobias"
        ],
        answer: 0,
        explanation: "CBT can address anxious thoughts and avoidance patterns and may incorporate gradual exposure to feared situations."
    },
    {
        number: 71,
        question: "Andrea feels overwhelmed with balancing work and family responsibilities. Using ecological systems theory, how should the social worker approach this situation?",
        choices: [
            "Focus solely on the client's time management skills",
            "Examine the interactions between the client's work, family, and social environment",
            "Advise the client to reduce work hours without considering other factors",
            "Suggest the client should focus only on family responsibilities"
        ],
        answer: 1,
        explanation: "Ecological systems theory examines the reciprocal interactions between individuals and their multiple environments."
    },
    {
        number: 72,
        question: "Victoria is struggling with self-esteem issues due to constant criticism from a family member. Which intervention based on humanistic theory would be most appropriate?",
        choices: [
            "Encourage the client to confront the family member aggressively",
            "Help the client build self-worth through positive self-regard and validation",
            "Advise the client to ignore the family member's criticism",
            "Focus on medication to alleviate symptoms"
        ],
        answer: 1,
        explanation: "Humanistic approaches emphasize acceptance, validation, self-worth, and the development of a positive sense of self."
    },
    {
        number: 73,
        question: "Sitio Cansoy-ong is experiencing high rates of unemployment and poverty. As a social worker, which approach would you take to address these systemic issues?",
        choices: [
            "Providing individual counseling to each unemployed person",
            "Developing community programs to improve job skills and employment opportunities",
            "Advising community members to relocate to areas with better job prospects",
            "Ignoring the problem as it is beyond the scope of social work"
        ],
        answer: 1,
        explanation: "Community-level programs that improve skills and employment opportunities address systemic conditions contributing to unemployment."
    },
    {
        number: 74,
        question: "Philip is helping a community affected by a natural disaster. Which immediate intervention is most appropriate?",
        choices: [
            "Conducting long-term therapy sessions with each individual",
            "Providing emergency resources and support services",
            "Focusing on community development projects",
            "Ignoring immediate needs to plan for future prevention"
        ],
        answer: 1,
        explanation: "After a disaster, immediate social work priorities include safety, basic needs, emergency resources, support, and connecting people with services."
    },
    {
        number: 75,
        question: "Lolita is a teenager experiencing identity confusion and is struggling with their sense of self. According to Erikson's theory, which stage is Lolita likely in?",
        choices: [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation"
        ],
        answer: 2,
        explanation: "Erikson's Identity vs. Role Confusion stage occurs primarily during adolescence and involves developing a coherent sense of identity."
    },
    {
        number: 76,
        question: "A client with schizotypal personality disorder (SPD) has unusual beliefs and behaviors. What is the best approach for the social worker?",
        choices: [
            "Cognitive Behavioral Therapy (CBT) to address distorted thoughts",
            "Ignoring the client's unusual beliefs",
            "Encouraging the client's eccentric behavior",
            "Suggesting the client avoid social interactions"
        ],
        answer: 0,
        explanation: "CBT can help clients examine unusual or distorted thoughts while developing healthier coping and social skills."
    },
    {
        number: 77,
        question: "Elmie is facilitating a support group for survivors of domestic violence. What is the most important focus of the group?",
        choices: [
            "Providing a safe and supportive environment for sharing experiences",
            "Encouraging survivors to confront their abusers",
            "Focusing solely on legal actions against abusers",
            "Ignoring past experiences and looking only to the future"
        ],
        answer: 0,
        explanation: "A safe and supportive environment allows survivors to share experiences, build support networks, and begin healing."
    },
    {
        number: 78,
        question: "Maris is developing a program to support immigrant families adjusting to a new country. What should be the primary focus?",
        choices: [
            "Assisting with legal documentation and employment",
            "Encouraging families to abandon their cultural practices",
            "Isolating immigrant families to maintain their cultural identity",
            "Ignoring the families' cultural backgrounds"
        ],
        answer: 0,
        explanation: "Practical support such as legal assistance and employment resources can help immigrant families adjust while respecting their cultural backgrounds."
    },
    {
        number: 79,
        question: "Jiwon is helping a client from a collectivist culture who is experiencing conflict with their individualistic workplace. What should Jiwon focus on?",
        choices: [
            "Helping the client navigate cultural differences and find a balance",
            "Encouraging the client to fully adopt individualistic values",
            "Advising the client to ignore workplace norms",
            "Suggesting the client quit their job"
        ],
        answer: 0,
        explanation: "Culturally responsive practice helps clients navigate cultural differences without requiring them to abandon their cultural identity."
    },
    {
        number: 80,
        question: "Erza is addressing the needs of a multicultural community with diverse backgrounds. What approach is most effective?",
        choices: [
            "Culturally competent practice that respects and integrates diverse cultural perspectives",
            "Enforcing a single cultural standard",
            "Ignoring cultural differences",
            "Isolating different cultural groups from each other"
        ],
        answer: 0,
        explanation: "Culturally competent practice recognizes, respects, and appropriately incorporates diverse cultural perspectives."
    },
    {
        number: 81,
        question: "Lucy is experiencing stigmatization due to their mental illness. What is the best approach for the social worker to take?",
        choices: [
            "Educating the client and their community about mental health to reduce stigma",
            "Encouraging the client to hide their illness",
            "Ignoring the client's experience of stigma",
            "Suggesting the client relocate to avoid stigmatization"
        ],
        answer: 0,
        explanation: "Education and awareness can challenge misconceptions and reduce stigma while helping the client access appropriate support."
    },
    {
        number: 82,
        question: "Natsu is developing a program for at-risk youth to prevent delinquency. What is the most effective component to include?",
        choices: [
            "Mentorship programs and positive role models",
            "Strict curfews and surveillance",
            "Isolating youth from their peers",
            "Focusing solely on punitive measures"
        ],
        answer: 0,
        explanation: "Mentorship and positive role models can provide guidance, support, healthy relationships, and constructive behavioral examples."
    },
    {
        number: 83,
        question: "Gray is experiencing a mid-life crisis and questioning his life's purpose. According to Erikson's stages of development, which stage might he be struggling with?",
        choices: [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Generativity vs. Stagnation",
            "Integrity vs. Despair"
        ],
        answer: 2,
        explanation: "Generativity vs. Stagnation is associated with adulthood and involves productivity, contribution, purpose, and concern for future generations."
    },
    {
        number: 84,
        question: "A client with low self-esteem is struggling to find motivation. According to Maslow's Hierarchy of Needs, which need is likely unmet?",
        choices: [
            "Physiological needs",
            "Safety needs",
            "Love and belonging needs",
            "Esteem needs"
        ],
        answer: 3,
        explanation: "Esteem needs include feelings of competence, achievement, recognition, and self-worth."
    },
    {
        number: 85,
        question: "A client, Marco, with obsessive-compulsive tendencies seeks perfection in all tasks. Which personality theory best explains this behavior?",
        choices: [
            "Freud's Psychoanalytic Theory",
            "Erikson's Psychosocial Development",
            "Maslow's Hierarchy of Needs",
            "Bandura's Social Learning Theory"
        ],
        answer: 0,
        explanation: "Freud's psychoanalytic theory explains personality and behavior in terms of unconscious conflicts, motives, and early experiences."
    },
    {
        number: 86,
        question: "A client, Juvia, with dependent personality disorder (DPD) has difficulty making decisions and relies heavily on others. What is the best therapeutic approach?",
        choices: [
            "Cognitive Behavioral Therapy (CBT) focusing on decision-making skills",
            "Ignoring the client's dependency",
            "Encouraging the client's reliance on others",
            "Suggesting the client avoid social interactions"
        ],
        answer: 0,
        explanation: "CBT can help clients with dependent patterns develop confidence, independent decision-making, problem-solving, and healthier beliefs about themselves."
    },
    {
        number: 87,
        question: "A client, Tanjiro, with borderline personality disorder (BPD) experiences intense and unstable emotions. Which therapeutic approach is most effective?",
        choices: [
            "Dialectical Behavior Therapy (DBT) focusing on emotional regulation",
            "Ignoring the client's emotional outbursts",
            "Encouraging the client's emotional instability",
            "Suggesting the client suppress their emotions"
        ],
        answer: 0,
        explanation: "DBT is particularly effective for BPD and teaches skills for emotional regulation, distress tolerance, mindfulness, and interpersonal effectiveness."
    },
    {
        number: 88,
        question: "Joaquin prioritizes family obligations over personal ambitions. Which cultural value might this reflect?",
        choices: [
            "Hiya",
            "Utang na loob",
            "Bayanihan",
            "Pakikisama"
        ],
        answer: 1,
        explanation: "Utang na loob refers to a sense of gratitude and reciprocal obligation toward people who have provided significant help or support."
    },
    {
        number: 89,
        question: "Narciso avoids discussing their mental health issues due to fear of social stigma. Which cultural trait is influencing their behavior?",
        choices: [
            "Pakikisama",
            "Utang na loob",
            "Hiya",
            "Bayanihan"
        ],
        answer: 2,
        explanation: "Hiya refers to a sense of shame, embarrassment, or concern about social judgment that can influence behavior."
    },
    {
        number: 90,
        question: "Maxima frequently engages in community activities and helps neighbors. This behavior is an example of:",
        choices: [
            "Hiya",
            "Pakikisama",
            "Bayanihan",
            "Utang na loob"
        ],
        answer: 2,
        explanation: "Bayanihan refers to communal cooperation and helping one another, particularly within a community."
    },
    {
        number: 91,
        question: "Melvin is assisting a community in addressing high unemployment rates. What intervention is most likely to have a sustainable impact?",
        choices: [
            "Short-term financial aid",
            "Comprehensive job training and placement programs",
            "Encouraging community members to leave the area",
            "Increasing police presence"
        ],
        answer: 1,
        explanation: "Comprehensive job training and placement programs address long-term employment needs by improving skills and access to sustainable work."
    },
    {
        number: 92,
        question: "Michael is developing a program to improve educational outcomes in a low-income community. What should be the primary focus?",
        choices: [
            "Providing resources and support for both students and their families",
            "Focusing solely on standardized test scores",
            "Ignoring family involvement",
            "Implementing a strict disciplinary policy"
        ],
        answer: 0,
        explanation: "Supporting both students and families addresses the broader environmental factors that influence educational success."
    },
    {
        number: 93,
        question: "The client, Vanessa, with narcissistic personality disorder (NPD) exhibits a grandiose sense of self-importance. What is the best therapeutic approach?",
        choices: [
            "Cognitive Behavioral Therapy (CBT) focusing on empathy and realistic self-perception",
            "Ignoring the client's grandiosity",
            "Reinforcing the client's self-importance",
            "Suggesting the client avoid social interactions"
        ],
        answer: 0,
        explanation: "CBT can help address distorted self-perceptions and develop healthier interpersonal patterns, including greater empathy and realistic self-appraisal."
    },
    {
        number: 94,
        question: "The client, Arlene, with schizoid personality disorder (SPD) prefers solitude and has limited emotional expression. What is the most appropriate intervention?",
        choices: [
            "Cognitive Behavioral Therapy (CBT) focusing on social skills and emotional expression",
            "Encouraging the client's preference for isolation",
            "Ignoring the client's behavior",
            "Suggesting the client remain isolated"
        ],
        answer: 0,
        explanation: "CBT-based interventions can help address social functioning and emotional expression while respecting the client's pace and preferences."
    },
    {
        number: 95,
        question: "Lee is helping a client cope with the stress of living in a high-crime neighborhood. What strategy is most effective?",
        choices: [
            "Developing a safety plan and connecting the client to community resources",
            "Encouraging the client to ignore the crime",
            "Suggesting the client move immediately",
            "Increasing the client's isolation"
        ],
        answer: 0,
        explanation: "A safety plan combined with community resources can help reduce risk, improve coping, and strengthen the client's support network."
    },
    {
        number: 96,
        question: "Marifel is supporting a client facing workplace discrimination. What is the most appropriate intervention?",
        choices: [
            "Assisting the client in filing a formal complaint and providing emotional support",
            "Ignoring the discrimination",
            "Suggesting the client tolerate the situation",
            "Advising the client to quit their job without other plans"
        ],
        answer: 0,
        explanation: "A social worker can provide emotional support while helping the client understand and access appropriate workplace complaint and advocacy processes."
    },
    {
        number: 97,
        question: "Carren is helping a client who has been involved in substance abuse. What is the most effective intervention?",
        choices: [
            "Comprehensive rehabilitation programs, including counseling and support groups",
            "Ignoring the substance abuse",
            "Suggesting the client manage withdrawal on their own",
            "Focusing solely on punitive measures"
        ],
        answer: 0,
        explanation: "Comprehensive rehabilitation can combine counseling, behavioral support, recovery resources, and peer support to address substance use and recovery needs."
    },
    {
        number: 98,
        question: "Krishell is highly motivated by recognition and achievement in their career. According to Maslow's Hierarchy of Needs, which need is being fulfilled?",
        choices: [
            "Physiological needs",
            "Safety needs",
            "Love and belonging needs",
            "Esteem needs"
        ],
        answer: 3,
        explanation: "Esteem needs include achievement, recognition, competence, and respect from oneself and others."
    },
    {
        number: 99,
        question: "Jelyn, who is struggling with feelings of worthlessness and failure, is likely dealing with unmet needs in which stage of Maslow's Hierarchy?",
        choices: [
            "Physiological needs",
            "Safety needs",
            "Love and belonging needs",
            "Esteem needs"
        ],
        answer: 3,
        explanation: "Feelings of worthlessness and failure are associated with unmet esteem needs, which include self-worth, competence, achievement, and recognition."
    },
    {
        number: 100,
        question: "Adelfa is helping a client who feels a lack of purpose and fulfillment in life. According to Erikson's stages of development, which stage might they be struggling with?",
        choices: [
            "Trust vs. Mistrust",
            "Initiative vs. Guilt",
            "Intimacy vs. Isolation",
            "Integrity vs. Despair"
        ],
        answer: 3,
        explanation: "Integrity vs. despair involves reflecting on one's life and developing a sense of fulfillment, meaning, and acceptance."
    }
];