const projects = [
  {
    name: "Fake News Detection System",
    type: "Research Paper (Bachelor's Final Year Project & Research Publication)",
    domain:
      "Natural Language Processing, Text Classification, Machine Learning",
    description:
      "Designed and implemented a Python-based machine learning backend for fake news detection. Performed manual data collection of real-world fake and true news articles, followed by extensive preprocessing to handle noisy and unstructured data.",
    techStack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Logistic Regression",
      "Decision Tree",
      "Gradient Boosting",
      "Random Forest",
    ],
    features: [
      "Applied TF-IDF vectorization for text representation",
      "Trained and evaluated multiple supervised learning models",
      "Conducted comparative performance analysis using Accuracy, Precision, Recall, and F1-Score",
      "Manual data collection and preprocessing",
    ],
  },
  {
    name: "Multilingual Translation & Transliteration System",
    type: "Minor in Artificial Intelligence – Final Assignment",
    domain: "Applied NLP, Multilingual Language Processing",
    description:
      "Developed an end-to-end multilingual NLP system supporting translation across five languages (English, Hindi, Japanese, Chinese, Russian) using pre-trained transformer-based models.",
    techStack: [
      "Python",
      "PyTorch",
      "Transformers",
      "NLLB-200",
      "Whisper",
      "Streamlit",
    ],
    features: [
      "Implemented training, inference, and testing workflows for multilingual text processing",
      "Integrated speech-to-text and text-to-speech components",
      "Multimodal language processing pipeline combining text and audio input",
      "Interactive Streamlit-based interface for real-time processing",
    ],
  },
];

export default projects;
