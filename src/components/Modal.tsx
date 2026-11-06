import React, { useEffect, useRef } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import type { ModalState } from '../types';

interface ModalProps {
  modalState: ModalState;
  onClose: () => void;
}

/**
 * Reusable Accessible Modal Component
 * 
 * Features:
 * - Traps user focus and handles 'Escape' key for accessibility (a11y).
 * - Implements ARIA modal attributes (`role="dialog"`, `aria-modal="true"`).
 * - Avoids empty or dead button clicks by providing transparent milestone feedback.
 */
export const Modal: React.FC<ModalProps> = ({ modalState, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modalState.isOpen) {
        onClose();
      }
    };

    if (modalState.isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Auto-focus the close button when opened
      setTimeout(() => closeButtonRef.current?.focus(), 50);
      // Prevent background scrolling while modal is active
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalState.isOpen, onClose]);

  if (!modalState.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-devsphere-surface border border-white/10 shadow-2xl shadow-indigo-500/10 text-devsphere-text transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:ring-2 focus:ring-indigo-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
              Milestone 01 • Active Development
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-white">
              {modalState.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div id="modal-description" className="space-y-3 text-slate-300 text-sm leading-relaxed mb-6">
          <p>{modalState.message}</p>
          <div className="p-3.5 rounded-xl bg-devsphere-elevated border border-white/5 text-xs text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300">Why are you seeing this?</div>
            <div>
              DevSphere is being engineered across 30 milestone phases. Week 1 establishes the design system, responsive architecture, and landing experience. Authentication, database integration, and active modules will be connected in future milestones.
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center space-x-2"
          >
            <span>Understood, Continue Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
