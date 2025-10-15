import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Code, Trophy } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const Interactive = () => {
  const [activeTab, setActiveTab] = useState<"quiz" | "editor">("quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #0B3B24, #1a5c3a);
      color: white;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }
    h1 {
      color: #CBA135;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to GMU Coding Club!</h1>
    <p>Edit the code on the left to see changes here.</p>
  </div>
</body>
</html>`
  );

  const quizQuestions: Question[] = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correct: 2,
    },
    {
      id: 3,
      question: "What is the correct syntax to print 'Hello World' in Python?",
      options: [
        "echo('Hello World')",
        "print('Hello World')",
        "printf('Hello World')",
        "console.log('Hello World')",
      ],
      correct: 1,
    },
    {
      id: 4,
      question: "Which data structure uses LIFO (Last In First Out) principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correct: 1,
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const runCode = () => {
    toast.success("Code executed successfully!", {
      description: "Check the preview on the right",
    });
  };

  return (
    <section id="interactive" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge and experiment with code in real-time
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "quiz" ? "default" : "outline"}
            onClick={() => setActiveTab("quiz")}
            className="gap-2"
          >
            <Brain className="h-4 w-4" />
            Coding Quiz
          </Button>
          <Button
            variant={activeTab === "editor" ? "default" : "outline"}
            onClick={() => setActiveTab("editor")}
            className="gap-2"
          >
            <Code className="h-4 w-4" />
            Live Code Editor
          </Button>
        </div>

        {/* Quiz Section */}
        {activeTab === "quiz" && (
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <Card className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Question {currentQuestion + 1} of {quizQuestions.length}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Score: {selectedAnswers.filter((a, i) => a === quizQuestions[i].correct).length}/{quizQuestions.length}
                    </div>
                  </div>
                  <CardDescription className="text-lg font-medium text-foreground">
                    {quizQuestions[currentQuestion].question}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={selectedAnswers[currentQuestion]?.toString()}
                    onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                  >
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      Previous
                    </Button>
                    <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined}>
                      {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="hover-lift text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
                  <CardDescription className="text-xl pt-4">
                    You scored <span className="text-secondary font-bold text-2xl">{calculateScore()}</span> out of {quizQuestions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-muted-foreground">
                    {calculateScore() === quizQuestions.length && "Perfect score! You're a coding champion! 🎉"}
                    {calculateScore() >= quizQuestions.length * 0.7 && calculateScore() < quizQuestions.length && "Great job! Keep learning! 📚"}
                    {calculateScore() < quizQuestions.length * 0.7 && "Good effort! Practice makes perfect! 💪"}
                  </div>
                  <Button onClick={resetQuiz} variant="default">
                    Retake Quiz
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Code Editor Section */}
        {activeTab === "editor" && (
          <div className="max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Live HTML/CSS Editor</CardTitle>
                <CardDescription>
                  Write HTML and CSS code on the left and see the live preview on the right
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Editor */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-lg font-semibold">Code Editor</Label>
                      <Button size="sm" onClick={runCode} variant="secondary">
                        <Code className="h-4 w-4 mr-2" />
                        Run Code
                      </Button>
                    </div>
                    <Textarea
                      value={htmlCode}
                      onChange={(e) => setHtmlCode(e.target.value)}
                      className="font-mono text-sm min-h-[400px] bg-muted"
                      placeholder="Enter your HTML/CSS code here..."
                    />
                  </div>

                  {/* Preview */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Live Preview</Label>
                    <div className="border rounded-lg overflow-hidden bg-white min-h-[400px]">
                      <iframe
                        srcDoc={htmlCode}
                        title="Live Preview"
                        className="w-full h-[400px]"
                        sandbox="allow-scripts"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Interactive;
