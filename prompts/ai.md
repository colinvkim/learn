- created by chatgpt 5.5 extended thinking on may 10, edited heavily by me

You are building a concise introductory course on modern artificial intelligence for the learn website. Familiarize yourself with CONTENT-PREFERENCES.md before writing. Go slowly and carefully. Add or change anything below that you think can be improved.

Course Goal

By the end, a learner should understand the main ideas behind modern AI systems: how models learn from data, how neural networks work at a conceptual level, how large language models work, how image generation works, and how modern AI systems are evaluated, adapted, and made safer.

This is not a course on how to use AI tools. Do not focus on prompt engineering, productivity workflows, company comparisons, or current product rankings. Instead, make the course a general reference for understanding modern artificial intelligence.

Audience

Assume the learner is technically curious but new to AI. They may know basic programming, but they should not need advanced math, machine learning experience, or deep statistics.

Write clearly and simply. Define terms before using them. Avoid unnecessary complexity. The course should be an introduction, not a deep dive.

Core Teaching Philosophy

Teach concepts before mechanisms.

For example:

- First explain that a model learns patterns from data.
- Then explain training, loss, and parameters.
- First explain that an LLM predicts tokens.
- Then explain transformers and attention.
- First explain that diffusion models remove noise.
- Then explain latent diffusion and Stable Diffusion-style systems.

The course should help learners build a mental model of modern AI, not memorize isolated terms.

What the Course Should Cover

1. What modern AI is

- AI as learned behavior rather than hand-written rules
- Models as functions that map inputs to outputs
- Parameters as learned internal settings
- Training vs inference
- Why modern AI is probabilistic
- Why “understanding” in AI is complicated

2. Machine learning foundations

- Datasets
- Features and representations
- Labels vs unlabeled data
- Loss functions
- Gradient descent, conceptually
- Overfitting and generalization
- Train, validation, and test sets
- Supervised, unsupervised, and self-supervised learning

3. Neural networks

- Neurons as simple mathematical units
- Layers
- Weights and biases
- Activations
- Forward pass
- Backpropagation, conceptually
- Why deeper networks can learn more complex patterns

Do not derive backpropagation mathematically. Explain what it does and why it matters.

4. Embeddings and representations

- What an embedding is
- How words, images, audio, and documents can become vectors
- Similarity in vector space
- Semantic relationships
- Why embeddings matter for search, recommendation, retrieval, and multimodal AI

This should be one of the most important units.

5. Language models

- Tokens
- Tokenization
- Next-token prediction
- Context windows
- Probability distributions over tokens
- Why predicting text can create broad abilities
- Why language models can sound fluent while still being wrong

6. Transformers and attention

- Why sequence modeling is hard
- Attention as deciding which parts of the input matter
- Self-attention
- Positional information
- Transformer blocks
- Why transformers scale well

Keep the explanation intuitive. Do not turn this into an implementation course.

7. How LLMs are trained

- Data collection
- Cleaning and filtering
- Pretraining
- Fine-tuning
- Instruction tuning
- Preference training
- Evaluation
- Deployment
- Model size, data size, compute, and scaling laws

Explain the difference between a base model and an assistant-style model.

8. Post-training and alignment

- Instruction tuning
- Human feedback
- Reward models
- RLHF
- DPO
- Safety tuning
- Helpfulness vs harmlessness
- Why alignment is difficult and not solved

Keep this grounded and simple.

9. Computer vision foundations

- Pixels as data
- Image classification
- Object detection
- Segmentation
- Convolutional neural networks, briefly
- Vision transformers, briefly
- Image embeddings

10. Diffusion and image generation

- Noise
- Denoising
- Forward diffusion
- Reverse diffusion
- Sampling
- Text conditioning
- Why generation happens over many steps

Core explanation: a diffusion model starts with noise and gradually turns it into a coherent image.

11. Stable Diffusion and latent diffusion

- Why generating directly in pixel space is expensive
- Latent space
- Autoencoders
- Text encoders
- U-Net denoisers
- Cross-attention
- Classifier-free guidance
- Image-to-image
- Inpainting
- Control signals

Explain Stable Diffusion-style systems as pipelines, not magic text-to-image boxes.

12. Multimodal AI

- Text-image pairs
- Contrastive learning
- Shared embedding spaces
- Image captioning
- Visual question answering
- Multimodal assistants
- Why connecting modalities is hard

13. Retrieval, tools, and AI systems

- Why models have limited internal knowledge
- Retrieval-augmented generation
- Embeddings for search
- Vector databases, conceptually
- Grounding
- Citations and provenance
- Tool calling
- Agents, briefly
- Why modern AI systems often combine models with external software

14. Evaluation and failure modes

- Benchmarks
- Human evaluation
- Hallucination
- Bias
- Robustness
- Calibration
- Prompt sensitivity
- Distribution shift
- Adversarial examples
- Data contamination

Make clear that AI systems are not evaluated only by whether they sound good.

15. Safety, ethics, and responsible AI

- Dataset bias
- Privacy
- Copyright concerns
- Misinformation
- Misuse
- Transparency
- Interpretability
- Red-teaming
- Safety policies
- Uncertainty and limitations

Do not make this preachy. Keep it concrete and technical enough to be useful.

16. Capstone synthesis
    Learners should be able to explain:

- How an LLM turns text into tokens and predicts continuations
- How a transformer uses attention
- How pretraining differs from post-training
- Why hallucinations happen
- How diffusion models generate images
- How text controls image generation
- How embeddings support search and multimodal systems
- Why evaluation and safety are central to modern AI

Style Requirements

- Keep the course concise.
- Prefer clear explanations over exhaustive coverage.
- Avoid hype.
- Avoid company-specific discussion.
- Avoid long historical surveys.
- Avoid heavy math unless it is absolutely necessary.
- Do not assume the learner already knows machine learning terminology.
- Define every major term at the point where it first matters.
- Use diagrams or simple analogies where helpful.
- Use examples, but do not turn the course into a tool-usage guide.
- Keep each lesson focused on one core idea.
- Make sure each module builds naturally on the previous one.

Do not overemphasize:

- prompt engineering
- AI productivity workflows
- lists of current AI companies
- current model leaderboards
- advanced implementation details
- CUDA/GPU programming
- full transformer implementation
- diffusion equations
- advanced linear algebra
- research-level alignment theory

The final course should feel like a polished, modern, beginner-friendly reference for understanding AI systems. Create the full course curriculum, along with a final capstone project
