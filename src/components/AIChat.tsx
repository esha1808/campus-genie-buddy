import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m CampusGenie, your intelligent campus companion! 🧞‍♂️ How can I help you today? I can assist with schedules, facilities, events, and more!',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const responses: { [key: string]: string } = {
      'schedule': 'Here are today\'s class schedules: \n• 8:00 AM - Mathematics (Room 101)\n• 9:45 AM - Programming Lab (Lab 204)\n• 11:30 AM - Physics (Room 305)\n• 2:00 PM - Project Work (Team rooms)',
      'exam': 'Upcoming exams:\n• Mid-term: Oct 15-25, 2025\n• Practical exams: Nov 1-10, 2025\n• Final exams: Dec 10-20, 2025\nDon\'t forget to register and prepare your hall tickets! 📚',
      'library': 'Library Information:\n• Hours: 8:00 AM - 10:00 PM (Mon-Sat)\n• Current capacity: 85% (247/290 seats)\n• New arrivals: 15 books this week\n• Digital resources: Available 24/7\nWould you like me to reserve a seat for you? 📖',
      'food': 'Campus Dining Options:\n• Main Cafeteria: Open until 9 PM\n• Coffee Corner: Open 24/7\n• Food Court: 11 AM - 10 PM\n• Today\'s Special: Butter Chicken & Biryani\nAll payment methods accepted! 🍽️',
      'event': 'Upcoming Events:\n• Tech Fest 2025: March 15-17\n• Annual Sports Meet: February 10-12\n• Cultural Night: January 25\n• Industry Career Fair: April 5\nRegister now to participate! 🎉',
      'help': 'I can help you with:\n✅ Class schedules & exam dates\n✅ Campus facility information\n✅ Event updates & registrations\n✅ Dining & accommodation info\n✅ Academic calendar & deadlines\n✅ Contact information\n\nJust ask me anything about campus life! 😊'
    };

    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key) || lowerMessage.includes(key + 's')) {
        return response;
      }
    }

    // Default responses for common queries
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello there! 👋 I\'m here to make your campus life easier. What would you like to know about?';
    }
    
    if (lowerMessage.includes('thank')) {
      return 'You\'re very welcome! 😊 Is there anything else I can help you with today?';
    }

    return `I understand you\'re asking about "${userMessage}". While I\'m still learning about this topic, I can definitely help you with class schedules, campus facilities, upcoming events, dining options, and general campus information. What specific area would you like to explore? 🤔`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: simulateAIResponse(userMessage.content),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    'Show my schedule',
    'Library hours',
    'Upcoming events',
    'Dining options'
  ];

  const handleQuickAction = (action: string) => {
    setInput(action);
    inputRef.current?.focus();
  };

  return (
    <div className="glass-card rounded-3xl h-[calc(100vh-40px)] flex flex-col sticky top-5">
      {/* Chat Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-t-3xl text-center">
        <div className="genie-glow genie-bounce w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
          🧞
        </div>
        <h3 className="text-xl font-semibold mb-2">CampusGenie AI</h3>
        <p className="text-sm opacity-90">Your Intelligent Campus Assistant</p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 max-w-[90%] slide-in",
                message.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                {message.role === 'user' ? (
                  <div className="bg-gradient-accent text-white rounded-full w-full h-full flex items-center justify-center">
                    <User size={18} />
                  </div>
                ) : (
                  <div className="bg-gradient-primary text-white rounded-full w-full h-full flex items-center justify-center">
                    <Bot size={18} />
                  </div>
                )}
              </div>
              <div
                className={cn(
                  "rounded-2xl p-4 max-w-full break-words",
                  message.role === 'user'
                    ? "bg-gradient-primary text-white"
                    : "bg-muted/50 border border-accent/20"
                )}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 max-w-[90%]">
              <div className="bg-gradient-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div className="bg-muted/50 border border-accent/20 rounded-2xl p-4 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-typing"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0.16s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0.32s' }}></div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">CampusGenie is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <button
              key={action}
              onClick={() => handleQuickAction(action)}
              className="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-accent/20">
        <div className="relative">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about campus life..."
            className="pr-12 rounded-full border-2 border-primary/20 focus:border-primary bg-white/90"
            disabled={isTyping}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 campus-button h-8 w-8 rounded-full"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;