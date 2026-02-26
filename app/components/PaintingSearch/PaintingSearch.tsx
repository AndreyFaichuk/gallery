'use client';

import { type ChangeEvent, type KeyboardEvent, useState, useMemo } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Suggestions } from './Suggestions';
import { type Product, Products } from './Products';
import { useQuery } from '@tanstack/react-query';

const MOCK_DATA = [
  'Mona Lisa',
  'Starry Night',
  'The Scream',
  'Girl with a Pearl Earring',
  'The Last Supper',
];

const MOCK_PRODUCTS: Product[] = [
  {
    name: 'Mona Lisa',
    logoUrl:
      'https://plus.unsplash.com/premium_photo-1771837804377-3a85ecdfa4b9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Starry Night',
    logoUrl:
      'https://images.unsplash.com/photo-1771904488645-fa6ebf7a2d06?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'The Scream',
    logoUrl:
      'https://plus.unsplash.com/premium_photo-1694475296052-66ab2908ded3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Girl with a Pearl Earring',
    logoUrl:
      'https://images.unsplash.com/photo-1771871028054-1f0d8f9f2e12?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const PaintingSearch = () => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (!search) return [];

    return MOCK_DATA.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()));
  }, [search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setIsOpen(true);
    setActiveSuggestionIndex(null);
  };

  const handleClear = () => {
    setSearch('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
      setActiveSuggestionIndex((prev) =>
        prev === null || prev === filtered.length - 1 ? 0 : prev + 1,
      );
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev === null || prev === 0 ? filtered.length - 1 : prev - 1,
      );
    }

    if (e.key === 'Enter' && activeSuggestionIndex !== null) {
      setSearch(filtered[activeSuggestionIndex]);
      setIsOpen(false);
    }

    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const afterIcon = search ? (
    <button type="button" onClick={handleClear} className="cursor-pointer">
      <X className="size-4" />
    </button>
  ) : undefined;

  return (
    <div className="relative w-full" aria-expanded={isOpen} aria-controls="search-listbox">
      <Input
        placeholder="Search paintings..."
        autoFocus
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        value={search}
        afterIcon={afterIcon}
        aria-autocomplete="list"
        aria-activedescendant={
          activeSuggestionIndex !== null ? `option-${activeSuggestionIndex}` : undefined
        }
      />

      {isOpen && filtered.length > 0 && (
        <div className="absolute mt-2 w-full rounded-md border shadow-md z-50 flex justify-around">
          <Suggestions
            activeSuggestionIndex={activeSuggestionIndex}
            suggestions={filtered}
            setActiveSuggestionIndex={setActiveSuggestionIndex}
          />

          <Products products={MOCK_PRODUCTS} />
        </div>
      )}
    </div>
  );
};
