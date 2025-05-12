import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';

const   CollapsibleFAQ = () => {
const [faqList, setFaqList] = useState([]);
const [openIndexes, setOpenIndexes] = useState([]);
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');

    const handleAdd = () => {
        if(question.trim() && answer.trim()) {
            const newQA = {
                id: Date.now(),
                question,
                answer
            };
            setFaqList([...faqList, newQA]);
            setQuestion('');
            setAnswer('');
        }
    };

    const toggleCollapse = (id) => {
        setOpenIndexes((prev) => 
            prev.includes(id) ? prev.filter((idx) => idx !== id) : [...prev, id] 
        );
    };


    return(
        <div className="w-full mt-10 space-y-4">
            <h2 className="text-lg font-semibold">Add a Question & Answer</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className='w-full'>
            <input 
            type="text"
            placeholder = "Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)} 
            className="w-full px-3 py-2 border rounded"            
            />
            <textarea
            placeholder='Enter Answer'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            />
            <button onClick={handleAdd} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            <Plus size={18} /> Add Question & Answer
            </button>
            </div>

            {faqList.map((faq) => 
            <div key={faq.id} className="rounded w-full">
                <button
                onClick={() => toggleCollapse(faq.id)}
                className="w-full flex justify-between items-center px-4 py-3 bg-blue-500 text-white font-medium rounded-t"
                >
                    <span>{faq.question}</span>
                    {openIndexes.includes(faq.id) ? <ChevronUp  /> : <ChevronDown />}
                </button>
                {openIndexes.includes(faq.id) && (
                    <div className="bg-gray-100 px-4 py-3 rounded-b">
                            {faq.answer}
                    </div>
                )}
            </div>        
        )}

            </div>
        </div>
    )
}

export default CollapsibleFAQ;