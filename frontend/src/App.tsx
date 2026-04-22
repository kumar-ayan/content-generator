import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  History, 
  Copy, 
  Check, 
  Loader2,
  FileText,
  Linkedin,
  Zap,
  X,
  Plus
} from 'lucide-react';

interface ContentResult {
  id: string;
  topic: string;
  article: string;
  linkedinPost: string;
  summary: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [result, setResult] = useState<ContentResult | null>(null);
  const [history, setHistory] = useState<ContentResult[]>(() => {
    const savedHistory = localStorage.getItem('alta_ai_history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const tones = ['Professional', 'Creative', 'Witty', 'Academic', 'Persuasive'];

  const saveToHistory = (newResult: ContentResult) => {
    const updatedHistory = [newResult, ...history].slice(0, 20);
    setHistory(updatedHistory);
    localStorage.setItem('alta_ai_history', JSON.stringify(updatedHistory));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone }),
      });
      
      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      const newResult: ContentResult = {
        ...data,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString()
      };

      setResult(newResult);
      saveToHistory(newResult);
    } catch (err) {
      console.error('Generation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0e15] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <div className="nebula-bg" />
      
      {/* Refined Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/10 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight font-outfit uppercase text-white">ALTA AI</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowHistory(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium"
          >
            <History size={16} />
            <span>History</span>
          </button>
        </div>
      </nav>

      {/* Main Content Interface */}
      <main className="max-w-4xl mx-auto pt-40 px-6 pb-24">
        
        {/* Focused Hero Input */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic tracking-tighter">
              Craft Brilliance.
            </h1>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Enter your vision below. ALTA will architect a complete content ecosystem in seconds.
            </p>
          </motion.div>

          <form onSubmit={handleGenerate} className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-focus-within:opacity-40 transition-opacity" />
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="The future of edge computing..."
              className="relative w-full bg-[#161b22] border border-white/10 rounded-full py-6 px-10 pr-36 focus:outline-none focus:border-indigo-500/50 transition-all text-lg shadow-2xl"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 bg-white text-black px-8 rounded-full flex items-center gap-2 font-bold transition-all hover:bg-indigo-50 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} />}
              <span>{loading ? 'Thinking...' : 'Generate'}</span>
            </button>
          </form>

          {/* Minimalist Tone Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tones.map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`px-4 py-1 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                  tone === t 
                    ? 'bg-white text-black border-white shadow-lg' 
                    : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Results Vertical Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div 
                key={result.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Executive Summary Card */}
                <div className="glass rounded-[2.5rem] p-10 relative overflow-hidden group border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                      <Zap size={12} />
                      Intelligence Summary
                    </div>
                    <button onClick={() => copyToClipboard(result.summary, 'summary')} className="p-2 transition-colors cursor-pointer">
                      {copied === 'summary' ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/20 hover:text-white" />}
                    </button>
                  </div>
                  <p className="text-2xl lg:text-4xl leading-snug font-medium text-white/90">
                    {result.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Article Card */}
                  <div className="glass rounded-[3rem] p-10 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                        <FileText size={12} />
                        Full Editorial
                      </div>
                      <button onClick={() => copyToClipboard(result.article, 'article')} className="p-2 transition-colors cursor-pointer">
                        {copied === 'article' ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/20 hover:text-white" />}
                      </button>
                    </div>
                    <div className="text-white/60 whitespace-pre-wrap leading-loose text-base lg:text-lg">
                      {result.article}
                    </div>
                  </div>

                  {/* LinkedIn Strategy Card */}
                  <div className="glass rounded-[3rem] p-10 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Linkedin size={12} />
                        Social Nexus
                      </div>
                      <button onClick={() => copyToClipboard(result.linkedinPost, 'linkedin')} className="p-2 transition-colors cursor-pointer">
                        {copied === 'linkedin' ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/20 hover:text-white" />}
                      </button>
                    </div>
                    <div className="bg-black/20 p-8 rounded-3xl border border-white/5">
                      <p className="text-white/70 whitespace-pre-wrap leading-relaxed italic text-sm">
                        {result.linkedinPost}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : !loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="flex flex-col items-center justify-center py-20 gap-6"
              >
                <div className="relative">
                   <div className="absolute -inset-10 bg-indigo-500 rounded-full blur-[100px] opacity-20" />
                   <Sparkles size={100} className="relative" />
                </div>
                <p className="text-xl font-medium tracking-widest uppercase opacity-40">Ready for Transmission</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* History Slide-out Drawer */}
      <AnimatePresence>
        {showHistory && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHistory(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0d1117] border-l border-white/10 z-[70] p-10 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <History className="text-indigo-500" />
                  Nexus Log
                </h2>
                <button 
                  onClick={() => setShowHistory(false)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scroll">
                {history.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center opacity-20 text-center gap-4">
                    <History size={40} />
                    <p className="italic">The chronicles are empty...</p>
                    <button onClick={() => setShowHistory(false)} className="text-xs underline cursor-pointer">Start creating</button>
                  </div>
                ) : (
                  history.map((item) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={item.id}
                      onClick={() => {
                        setResult(item);
                        setShowHistory(false);
                      }}
                      className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-white/10 group"
                    >
                      <p className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {item.topic}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] text-white/30 uppercase tracking-widest">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                           <Plus size={14} className="text-indigo-400" />
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                 <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Intelligence Nexus v2.0</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
