const projects = [
  {
    name: "Fake News Detection System",
    type: "Research Paper (Bachelor's Final Year Project & Research Publication)",
    domain:
      "Natural Language Processing, Text Classification, Machine Learning",
    description:
      "Designed and implemented the Python-based machine learning backend for a fake news detection system. Performed manual data collection of real-world fake and true news articles, followed by extensive preprocessing to handle noisy and unstructured data. Applied TF-IDF vectorization for text representation.",
    techStack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
    features: [
      "Trained and evaluated multiple supervised learning models: Logistic Regression, Decision Tree, Gradient Boosting, and Random Forest",
      "Conducted comparative performance analysis using Accuracy, Precision, Recall, and F1-Score",
      "Manual data collection and preprocessing pipeline for real-world news articles",
      "TF-IDF vectorization for effective text representation",
    ],
  },
  {
    name: "Multilingual Translation & Transliteration System",
    type: "Minor in Artificial Intelligence – Final Assignment",
    domain: "Applied NLP, Multilingual Language Processing",
    description:
      "Developed an end-to-end multilingual NLP system supporting translation across five languages (English, Hindi, Japanese, Chinese, Russian) using pre-trained transformer-based models. Implemented and evaluated training, inference, and testing workflows for multilingual text processing tasks.",
    techStack: [
      "Python",
      "PyTorch",
      "Transformers",
      "NLLB-200",
      "Whisper",
      "Streamlit",
    ],
    features: [
      "Integrated speech-to-text and text-to-speech components for multimodal language processing",
      "Designed multimodal language processing pipeline combining text and audio inputs",
      "Deployed interactive Streamlit-based interface supporting real-time translation, transliteration, and speech processing",
      "Training, inference, and testing workflows for multilingual text processing",
    ],
  },
];

export default projects;
