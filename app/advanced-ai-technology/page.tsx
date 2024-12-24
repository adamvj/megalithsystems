import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AdvancedAITechnology() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100 text-stone-800">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-stone-800 text-stone-100 relative z-10">
        <Link className="flex items-center justify-center" href="/">
          <span className="ml-2 text-lg font-bold">Megalith Systems</span>
        </Link>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Advanced AI Technology Solutions</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">AI Agent Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Intelligent Customer Service Agents</h3>
              <p className="mb-4">Our AI-powered customer service agents provide 24/7 support, handling inquiries, resolving issues, and escalating complex problems to human agents when necessary.</p>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">Learn More</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Predictive Maintenance Assistants</h3>
              <p className="mb-4">Our AI agents analyze sensor data from industrial equipment to predict maintenance needs, reducing downtime and optimizing operational efficiency.</p>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">Learn More</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Financial Advisory Bots</h3>
              <p className="mb-4">AI-driven financial advisors that provide personalized investment recommendations and portfolio management based on individual risk profiles and market trends.</p>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">Learn More</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Healthcare Diagnostic Assistants</h3>
              <p className="mb-4">Our AI agents assist healthcare professionals by analyzing patient data, suggesting potential diagnoses, and recommending treatment plans based on the latest medical research.</p>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">Learn More</Button>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Technology Stack</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Natural Language Processing (NLP) using transformers and BERT-based models</li>
              <li>Deep Learning frameworks: TensorFlow and PyTorch</li>
              <li>Reinforcement Learning for adaptive decision-making</li>
              <li>Computer Vision with Convolutional Neural Networks (CNNs)</li>
              <li>Knowledge Graphs for complex reasoning and information retrieval</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4">Infrastructure and Deployment</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cloud platforms: AWS, Google Cloud, and Azure for scalable computing</li>
              <li>Containerization with Docker and orchestration using Kubernetes</li>
              <li>MLOps pipelines for continuous integration and deployment of AI models</li>
              <li>Distributed computing frameworks like Apache Spark for big data processing</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4">Integration and APIs</h3>
            <ul className="list-disc pl-6">
              <li>RESTful APIs and GraphQL for seamless integration with client systems</li>
              <li>WebSocket protocols for real-time communication</li>
              <li>OAuth 2.0 and JWT for secure authentication and authorization</li>
              <li>Kafka and RabbitMQ for event-driven architectures and message queuing</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Megalith Systems?</h2>
          <p className="text-lg mb-6">
            At Megalith Systems, we leverage cutting-edge AI technologies to develop intelligent agents that transform businesses across industries. Our solutions combine advanced machine learning algorithms with domain expertise to deliver unparalleled performance and adaptability.
          </p>
          <Button className="bg-amber-600 text-white hover:bg-amber-700">
            Contact Us for a Consultation
          </Button>
        </section>
      </main>
      <footer className="flex flex-col gap-2 py-6 w-full items-center px-4 md:px-6 border-t border-stone-300 bg-stone-100">
        <p className="text-xs text-stone-500">© 2024 Megalith Systems. All rights reserved.</p>
      </footer>
    </div>
  )
}

