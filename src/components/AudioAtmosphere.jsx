import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioAtmosphere({ isMuted, setIsMuted }) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const filterRef = useRef(null);

  const startAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Lowpass filter for smooth industrial hum
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);
        filter.Q.setValueAtTime(1.5, ctx.currentTime);
        filter.connect(masterGain);
        filterRef.current = filter;

        // Sub oscillator: 48Hz (engineered resonant frequency)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(48, ctx.currentTime);
        osc1.connect(filter);
        osc1.start();
        osc1Ref.current = osc1;

        // Harmonic overtone: 96Hz with subtle detune
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(96, ctx.currentTime);
        osc2.detune.setValueAtTime(3, ctx.currentTime);
        const osc2Gain = ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.25, ctx.currentTime);
        osc2.connect(osc2Gain);
        osc2Gain.connect(filter);
        osc2.start();
        osc2Ref.current = osc2;
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (gainNodeRef.current) {
        // Fade in to very gentle subtle ambient level (0.04)
        gainNodeRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.setTargetAtTime(0.04, audioCtxRef.current.currentTime, 1.2);
      }
    } catch (e) {
      console.warn("AudioContext init prevented:", e);
    }
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
      gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.5);
    }
  };

  const toggleSound = () => {
    if (isMuted) {
      startAudio();
      setIsMuted(false);
    } else {
      stopAudio();
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isMuted ? "Enable Ambient Audio" : "Mute Ambient Audio"}
      className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#A8AAA5] hover:text-[#F2F0E9] transition-colors border border-[#2C302F]/60 rounded-none bg-[#0E1111]/40 hover:border-[#2C302F]"
    >
      {isMuted ? (
        <>
          <VolumeX className="w-3 h-3 text-[#6E736F]" />
          <span>AUDIO / OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3 h-3 text-[#D8FF45] animate-pulse" />
          <span className="text-[#F2F0E9]">AUDIO / ON</span>
        </>
      )}
    </button>
  );
}
