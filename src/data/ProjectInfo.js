export const ProjectData = [
    {
        title: "Automating Contact Tracing",
        description: "Utilized graph neural networks to build a model that would attempt to predict contact tracing patterns on a mobility dataset in Austin, TX. One iteration of this project attempted to predict contact between individuals on a static network based on a contact network generated over 5 days of mobility data. Another iteration of this project attempted to predict contact between individuals on a dynamic contact network that would change every day. For the static network, the model achieved an ROC-AUC score of 0.91, and for the dynamic network, the model achieved an ROC-AUC score of 0.79.",
        tools: [
            "Python",
            "Graph Neural Networks",
            "Graph Convolutional Networks",
            "Deep Graph Library (DGL)",
            "NetworkX",
        ],
        links: {
            "Github": "https://github.com/afnanmmir/Infection-Tracing"
        }
    },
    {
        title: "UT Course Search",
        description: "Built a semantic search engine for UT courses using OpenAI embeddings API and Pinecone Vector Database. Additionally, used LlamaIndexing with ChatGPT API to provide users with a chat-like answer to their queries about courses. Used Next.js to build the frontend, Flask to build to backend, Pinecone for the vector database, and Docker/Google Cloud Platform to deploy the application.",
        tools: [
            "Python",
            "Large Language Models",
            "Embeddings",
            "LlamaIndexing",
            "Pinecone Vector Database",
            "Next.js",
            "Docker",
            "Google Cloud Platform"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/ut_course_search/",
            "Website": "https://ut-course-search-5e5ddpxplq-uc.a.run.app/"
        }
    },
    {
        title: "Research Paper Summarizer",
        description: "Finetuned a base T5 model that would take technical abstracts from research papers and generate a readable summary of the paper. The model was finetuned using the HuggingFace transformers library and the Trainer API, and it achieved a ROUGE-1 score of 0.403590 and a ROUGE-2 score of 0.124948. A demo of this was also created using Streamlit.",
        tools:[
            "Python",
            "Large Language Models",
            "Streamlit",
            "HuggingFace",
            "Pytorch"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/Research-Paper-Summarizer",
            "Streamlit Demo": "https://jaykumarpatel4802-streamlit-demo-app-9ajr2q.streamlit.app/"
        }
    },
    {
        title: "Shot Predictor",
        description: "Built a machine learning pipeline that utilizes deep learning based pose estimation networks to predict the outcome of a free throw in basketball. The model achieved an accuracy of 0.726 and ROC-AUC score of 0.794.",
        tools: [
            "Python",
            "Tensorflow",
            "Scikit-learn",
            "Pose Estimation"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/Shot-Predictor"
        }
    },
    {
        title: "LoFi Music Generator",
        description: "Used deep learning techniques such as Recurrent Neural Networks (RNNs) and Variational Auto-Encoders (VAEs) to produce a generative model that outputted new LoFI hip-hop music in the form of a MIDI file.",
        tools: [
            "Python",
            "Tensorflow",
            "Deep Learning",
            "Generative Models"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/460J_Final",
            "Medium Article": "https://medium.com/@jvasilyev415/using-deep-learning-techniques-to-generate-lofi-music-b039ed64ebc1"
        }
    },
    {
        title: "NBA Game Predictor",
        description: "A side project where I scraped historical NBA game data as well as advanced team statistics and trained a model to predict the result of games in the current season. I used pandas and numpy to clean the data, matplotlib and seaborn to visualize the data, and the Random Forest and Logistic Regression models in Scikit-learn to perform the classifications.",
        tools: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Machine Learning"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/NBA-Game_Predictor"
        }
    },
    {
        title:"UT Hardware as a Service",
        description: "Built a full-stack web application that acts as a HaaS application that allows users to check out hardware resources and manage them. Involved building APIs to perform CRUD operations and a frontend GUI.",
        tools:[
            "Python",
            "Javascript",
            "React",
            "Flask",
            "MongoDB"
        ],
        links: {
            "Github": "https://github.com/afnanmmir/EE461L_Project"
        }
    },
    {
        title:"eHills",
        description:"Created a multithreaded auctioning service using Java that allowed users to bid on and buy items. Implemented using Java and JavaFX.",
        tools: [
            "Java"
        ],
        links:{

        }
    },
    {
        title:"Array Simulator",
        description:"Helped build a simulator in python that models the behavior of solar cells given various external conditions. Implemented algorithms in this simulator to find the maximum power point, and measured the performance of of these algorithms using the simulator.",
        tools:[
            "Python",
            "JSON",
            "PyQTGraph"
        ],
        links:{
            "Github": "https://github.com/lhr-solar/Power-Generation-Eclipse-SW"
        }
    },
    {
        title:"Spotify Rewind",
        description: "Utilized the spotify API to build a web app in python that allows users to view their most listened to songs and artists over certain periods of time. Additionally, it shows a weighted popularity score for the songs and artists the user listens to. Built using Flask.",
        tools:[
            "Python",
            "Flask",
            "SpotiPy"
        ],
        links:{
            "Website": "https://spotify-re.herokuapp.com/",
            "Github": "https://github.com/afnanmmir/Spotify-Rewind"
        }
    }
]
