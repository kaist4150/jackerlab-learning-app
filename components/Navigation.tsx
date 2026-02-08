'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  GraduationCap,
  Menu,
  X,
  Globe,
  Code,
  Atom,
  FileCode,
  Braces,
  Wind,
  Gamepad2,
  Binary,
  Database,
  Blocks,
  GitBranch,
  BarChart3,
  TrendingUp,
  Box,
  Palette,
  Music,
  Orbit,
  Sparkles,
  Glasses,
  Brain,
  BookType,
} from 'lucide-react';

const menuItems = [
  {
    category: '웹 개발',
    items: [
      { name: 'HTML & CSS', path: '/courses/html-css', icon: Globe },
      { name: 'React', path: '/courses/react', icon: Atom },
      { name: 'Vue.js', path: '/courses/vue', icon: Wind },
    ],
  },
  {
    category: '프로그래밍',
    items: [
      { name: 'JavaScript', path: '/courses/javascript', icon: FileCode },
      { name: 'TypeScript', path: '/courses/typescript', icon: Braces },
      { name: 'Python', path: '/courses/python', icon: Code },
      { name: 'Go', path: '/courses/go', icon: Wind },
      { name: 'Lua', path: '/courses/lua', icon: Gamepad2 },
      { name: 'C/C++', path: '/courses/cpp', icon: Binary },
      { name: 'SQL', path: '/courses/sql', icon: Database },
      { name: 'Blockly', path: '/courses/blockly', icon: Blocks },
    ],
  },
  {
    category: '시각화',
    items: [
      { name: 'Mermaid', path: '/courses/mermaid', icon: GitBranch },
      { name: 'Chart.js', path: '/courses/chart', icon: BarChart3 },
      { name: 'D3.js', path: '/courses/d3', icon: TrendingUp },
    ],
  },
  {
    category: '크리에이티브',
    items: [
      { name: 'Three.js', path: '/courses/threejs', icon: Box },
      { name: 'p5.js', path: '/courses/p5', icon: Palette },
      { name: 'Tone.js', path: '/courses/tone', icon: Music },
      { name: 'Matter.js', path: '/courses/matter', icon: Orbit },
      { name: 'GLSL', path: '/courses/glsl', icon: Sparkles },
      { name: 'A-Frame', path: '/courses/aframe', icon: Glasses },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow.js', path: '/courses/tensorflow', icon: Brain },
    ],
  },
  {
    category: '기타',
    items: [
      { name: 'LaTeX', path: '/courses/latex', icon: BookType },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center px-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link href="/" className="flex items-center gap-2 ml-2">
          <GraduationCap className="text-green-600" size={24} />
          <span className="text-lg font-bold text-gray-900">Learning</span>
        </Link>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-14 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky left-0 z-40
          w-64 bg-white border-r border-gray-200
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto top-14 lg:top-0 h-[calc(100vh-3.5rem)] lg:h-screen
        `}
      >
        {/* Desktop Logo */}
        <div className="hidden lg:block p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="text-green-600" size={28} />
            <span className="text-xl font-bold text-gray-900">Learning</span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="p-4">
          {menuItems.map((section) => (
            <div key={section.category} className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.path === '/'
                    ? pathname === '/'
                    : pathname === item.path || pathname.startsWith(item.path + '/');
                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                          transition-colors duration-150
                          ${
                            isActive
                              ? 'bg-green-50 text-green-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}
                      >
                        <Icon size={18} />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
