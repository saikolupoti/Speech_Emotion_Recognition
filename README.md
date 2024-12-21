# Speech Emotion Recognition (SER)

Speech Emotion Recognition (SER) is a significant area of research that focuses on identifying and classifying human emotions from speech signals. This project utilizes deep learning techniques, particularly Convolutional Neural Networks (CNN) and Mel Frequency Cepstral Coefficients (MFCC), to classify emotions such as happiness, sadness, fear, and anger. The goal of this project is to enhance human-computer interaction by developing an accurate emotion recognition model using state-of-the-art deep learning architectures.

---

## Abstract

Speech Emotion Recognition (SER) is an evolving field focused on detecting human emotions from speech signals. By utilizing deep learning models like Convolutional Neural Networks (CNNs) and feature extraction techniques such as Mel Frequency Cepstral Coefficients (MFCC), this project aims to accurately classify emotions like happiness, sadness, fear, and anger. The project uses multiple datasets (RAVDESS, CREMA-D, TESS) to train and validate the model.

Data augmentation techniques, including synthetic data generation, have been employed to overcome data scarcity and improve model generalization. The CNN model is trained to recognize emotions with high accuracy, achieving up to 96% classification accuracy. The system is designed to handle real-time emotion detection, making it applicable for fields such as virtual assistants, call centers, and psychiatric assessments.

---

## Introduction


Speech Emotion Recognition (SER) systems identify and classify emotions from human speech. These systems are critical in improving communication between humans and machines, enhancing user experiences in applications such as virtual assistants (Alexa, Siri), customer service, and healthcare. 

Traditional SER methods involved manual feature extraction, focusing on speech characteristics like pitch, energy, and rhythm. While these methods were effective to some extent, they faced challenges due to variability in emotion expression across speakers, languages, and cultures. Recent advancements in deep learning techniques, such as CNNs, LSTMs, and RNNs, have significantly improved the accuracy and robustness of SER systems by automating pattern recognition directly from raw speech data.

---

## Motivation

The motivation behind this project stems from the need for more emotionally intelligent systems capable of understanding and responding to human emotions. In applications such as virtual assistants, customer service analytics, and telemedicine, accurate emotion recognition is essential to improve interaction quality. 

A key challenge in SER research is the availability of large, labeled datasets. Current datasets are often small, leading to overfitting and poor generalization. This project addresses the data scarcity issue by applying synthetic data augmentation techniques, generating new emotional speech samples to improve model performance.

Moreover, real-time emotion recognition is a major hurdle, especially in noisy environments or with diverse speech patterns. Overcoming these challenges is crucial for deploying SER systems in real-world applications.

---

## Scope of the Project

The primary goal of this project is to develop a CNN-based Speech Emotion Recognition model that can classify emotions such as happiness, sadness, anger, and fear. The model is trained using popular speech datasets such as **RAVDESS**, **TESS**, **SAVEE**, and **CREMA-D**. 

The system leverages **Mel Frequency Cepstral Coefficients (MFCC)** for feature extraction and employs CNNs for efficient speech analysis. To tackle the limited availability of labeled data, **synthetic data augmentation** techniques are used to expand the dataset and improve model generalization.

Key features of the project include:
- **Fine-grained emotion recognition**: Detecting subtle emotional transitions within a single utterance.
- **Real-time emotion detection**: Ensuring the model performs well in noisy or variable environments.
- **High accuracy**: Aiming to achieve high classification accuracy (up to 96% in some cases).
- **Applicability**: The system can be deployed in various fields like virtual assistants, healthcare, and customer service.

---

## Technologies Used

- **Python** – Programming language.
- **TensorFlow / Keras** – Deep learning libraries for building the emotion recognition model.
- **Librosa** – For audio feature extraction (MFCC, Chroma, etc.).
- **Scikit-learn** – For model evaluation and additional utilities.
- **NumPy / Pandas** – For data manipulation.
- **Matplotlib / Seaborn** – For data visualization.
- **Jupyter Notebooks** – For interactive model development (optional).

---

## Datasets

The following datasets are used to train and evaluate the model:

- **RAVDESS**: Ryerson Audio-Visual Database of Emotional Speech and Song.
- **TESS**: Toronto Emotional Speech Set.
- **SAVEE**: Surrey Audio-Visual Expressed Emotion.
- **CREMA-D**: Crowd-sourced Emotional Multimodal Actors Dataset.

These datasets contain speech samples with various emotional labels like **happiness**, **anger**, **sadness**, **fear**, **surprise**, and **neutral**.

---

## Model Architecture

This project uses **Convolutional Neural Networks (CNN)** for feature extraction and emotion classification. CNNs are effective in identifying spatial hierarchies in data, making them well-suited for speech emotion recognition. 

The following steps summarize the architecture:
1. **Feature Extraction**: Audio features (MFCC) are extracted from raw speech.
2. **CNN Model**: The extracted features are passed through a series of convolutional layers for emotion classification.
3. **Data Augmentation**: Techniques like noise injection, pitch variation, and time stretching are used to generate synthetic data, improving model generalization.

---

## Installation

### Prerequisites

- Python 3.7+
- pip (Python package installer)

