
import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypewriterEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500
}: TypewriterEffectProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setText(prev => {
        if (shouldDelete) {
          return prev.substring(0, prev.length - 1);
        }
        return currentWord.substring(0, prev.length + 1);
      });

      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="text-highlight">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
