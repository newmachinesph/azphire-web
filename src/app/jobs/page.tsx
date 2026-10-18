'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Sample job data - replace with API data later
const sampleJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Global',
    location: 'Remote - US Hours',
    type: 'Full-time',
    salary: '$3,000 - $5,000/mo',
    posted: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js'],
    logo: 'T',
    featured: true,
  },
  {
    id: 2,
    title: 'Virtual Assistant',
    company: 'StartupXYZ',
    location: 'Remote - Flexible',
    type: 'Full-time',
    salary: '$800 - $1,200/mo',
    posted: '1 day ago',
    tags: ['Admin', 'Communication', 'Google Suite'],
    logo: 'S',
    featured: true,
  },
  {
    id: 3,
    title: 'Customer Support Specialist',
    company: 'CloudServices Inc',
    location: 'Remote - EU Hours',
    type: 'Contract',
    salary: '$1,000 - $1,500/mo',
    posted: '3 days ago',
    tags: ['Customer Service', 'Zendesk', 'English'],
    logo: 'C',
    featured: false,
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'DesignStudio',
    location: 'Remote - Any Timezone',
    type: 'Freelance',
    salary: '$2,500 - $4,000/mo',
    posted: '5 days ago',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    logo: 'D',
    featured: false,
  },
  {
    id: 5,
    title: 'Content Writer',
    company: 'MediaGroup',
    location: 'Remote - Flexible',
    type: 'Part-time',
    salary: '$500 - $800/mo',
    posted: '1 week ago',
    tags: ['Writing', 'SEO', 'Research'],
    logo: 'M',
    featured: false,
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Remote - US Hours',
    type: 'Full-time',
    salary: '$4,000 - $6,000/mo',
    posted: '4 days ago',
    tags: ['Python', 'React', 'AWS'],
    logo: 'I',
    featured: true,
  },
  // More jobs (shown blurred as teaser)
  {
    id: 7,
    title: 'DevOps Engineer',
    company: 'ScaleUp Solutions',
    location: 'Remote - US Hours',
    type: 'Full-time',
    salary: '$4,500 - $6,500/mo',
    posted: '1 day ago',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    logo: 'S',
    featured: true,
  },
  {
    id: 8,
    title: 'Social Media Manager',
    company: 'BrandBoost Agency',
    location: 'Remote - Flexible',
    type: 'Full-time',
    salary: '$1,200 - $2,000/mo',
    posted: '2 days ago',
    tags: ['Social Media', 'Content', 'Analytics'],
    logo: 'B',
    featured: false,
  },
  {
    id: 9,
    title: 'Data Analyst',
    company: 'DataDriven Co',
    location: 'Remote - Any Timezone',
    type: 'Full-time',
    salary: '$2,500 - $4,000/mo',
    posted: '3 days ago',
    tags: ['SQL', 'Python', 'Tableau'],
    logo: 'D',
    featured: true,
  },
  {
    id: 10,
    title: 'Executive Assistant',
    company: 'Fortune500 Partner',
    location: 'Remote - US Hours',
    type: 'Full-time',
    salary: '$1,500 - $2,500/mo',
    posted: '1 day ago',
    tags: ['Executive Support', 'Calendar', 'Travel'],
    logo: 'F',
    featured: false,
  },
  {
    id: 11,
    title: 'Mobile App Developer',
    company: 'AppWorks Studio',
    location: 'Remote - Flexible',
    type: 'Contract',
    salary: '$3,500 - $5,500/mo',
    posted: '4 days ago',
    tags: ['React Native', 'iOS', 'Android'],
    logo: 'A',
    featured: true,
  },
  {
    id: 12,
    title: 'Graphic Designer',
    company: 'CreativeHub',
    location: 'Remote - EU Hours',
    type: 'Freelance',
    salary: '$1,800 - $3,000/mo',
    posted: '2 days ago',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
    logo: 'C',
    featured: false,
  },
];

const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Freelance'];

const salaryRanges = [
  { label: 'Any Salary', value: 'all' },
  { label: 'Under $1,000/mo', value: '0-1000' },
  { label: '$1,000 - $2,000/mo', value: '1000-2000' },
  { label: '$2,000 - $3,000/mo', value: '2000-3000' },
  { label: '$3,000 - $5,000/mo', value: '3000-5000' },
  { label: '$5,000+/mo', value: '5000+' },
];

const locationOptions = [
  { label: 'Any Timezone', value: 'all' },
  { label: 'US Hours', value: 'US Hours' },
  { label: 'EU Hours', value: 'EU Hours' },
  { label: 'Flexible', value: 'Flexible' },
];

const experienceLevels = [
  { label: 'Any Experience', value: 'all' },
  { label: 'Entry Level', value: 'entry' },
  { label: 'Mid Level', value: 'mid' },
  { label: 'Senior Level', value: 'senior' },
];

const postedOptions = [
  { label: 'Any Time', value: 'all' },
  { label: 'Last 24 hours', value: '1' },
  { label: 'Last 7 days', value: '7' },
  { label: 'Last 30 days', value: '30' },
];

const categories = [
  { name: 'Software Development', count: 156, icon: '💻' },
  { name: 'Virtual Assistant', count: 89, icon: '📋' },
  { name: 'Customer Support', count: 67, icon: '🎧' },
  { name: 'Design & Creative', count: 54, icon: '🎨' },
  { name: 'Marketing', count: 48, icon: '📢' },
  { name: 'Sales', count: 42, icon: '💼' },
  { name: 'Writing & Content', count: 38, icon: '✍️' },
  { name: 'Data Entry', count: 35, icon: '📊' },
  { name: 'Accounting & Finance', count: 31, icon: '💰' },
  { name: 'Project Management', count: 28, icon: '📅' },
  { name: 'Human Resources', count: 24, icon: '👥' },
  { name: 'Social Media', count: 22, icon: '📱' },
  { name: 'Video & Animation', count: 19, icon: '🎬' },
  { name: 'SEO & SEM', count: 17, icon: '🔍' },
  { name: 'E-commerce', count: 15, icon: '🛒' },
  { name: 'Translation', count: 14, icon: '🌐' },
  { name: 'Teaching & Tutoring', count: 12, icon: '📚' },
  { name: 'Healthcare', count: 11, icon: '⚕️' },
  { name: 'Legal', count: 9, icon: '⚖️' },
  { name: 'Real Estate', count: 8, icon: '🏠' },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedPosted, setSelectedPosted] = useState('all');
  const [showBlurredJobs, setShowBlurredJobs] = useState(false);

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'All Types' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    return matchesSearch && matchesType && matchesLocation;
  });

  const clearFilters = () => {
    setSelectedSalary('all');
    setSelectedLocation('all');
    setSelectedExperience('all');
    setSelectedPosted('all');
  };

  const activeFilterCount = [selectedSalary, selectedLocation, selectedExperience, selectedPosted].filter(f => f !== 'all').length;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Find Your Dream Remote Job
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Browse hundreds of remote opportunities from companies worldwide
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED9F08]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {(showAllCategories ? categories : categories.slice(0, 10)).map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                onClick={() => setSearchQuery(category.name.split(' ')[0])}
                className="group flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#0B2652] border border-gray-100 hover:border-[#0B2652] transition-all duration-300"
              >
                <span className="text-xl">{category.icon}</span>
                <div className="text-left min-w-0">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-white truncate transition-colors">
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                    {category.count} jobs
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          {categories.length > 10 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0B2652] hover:text-[#1a3a6e] transition-colors"
              >
                {showAllCategories ? 'Show Less' : `Show ${categories.length - 10} More Categories`}
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${showAllCategories ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">
                {filteredJobs.length} jobs found
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Job Type Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2652] cursor-pointer"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>

              {/* More Filters Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 border rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  showFilters || activeFilterCount > 0
                    ? 'bg-[#0B2652] border-[#0B2652] text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <AdjustmentsHorizontalIcon className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-white text-[#0B2652] rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Filter Jobs</h3>
                    {activeFilterCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-[#0B2652] hover:text-[#1a3a6e] font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Salary Range */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salary Range
                      </label>
                      <select
                        value={selectedSalary}
                        onChange={(e) => setSelectedSalary(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent cursor-pointer"
                      >
                        {salaryRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Location/Timezone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent cursor-pointer"
                      >
                        {locationOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                      </label>
                      <select
                        value={selectedExperience}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent cursor-pointer"
                      >
                        {experienceLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Posted Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Posted
                      </label>
                      <select
                        value={selectedPosted}
                        onChange={(e) => setSelectedPosted(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent cursor-pointer"
                      >
                        {postedOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Job Listings - First 6 jobs */}
          <div className="space-y-4">
            {filteredJobs.slice(0, 6).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/jobs/${job.id}`}>
                  <div
                    className={`group bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:border-[#0B2652]/20 cursor-pointer ${
                      job.featured ? 'border-[#ED9F08]/30 ring-1 ring-[#ED9F08]/10' : 'border-gray-100'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center text-white font-bold text-xl">
                          {job.logo}
                        </div>
                      </div>

                      {/* Job Info */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0B2652] transition-colors">
                            {job.title}
                          </h3>
                          {job.featured && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-[#ED9F08]/10 text-[#ED9F08] rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{job.company}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPinIcon className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <BriefcaseIcon className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <CurrencyDollarIcon className="h-4 w-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {job.posted}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {job.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Blurred Jobs Section - Shows after "Load More" is clicked */}
          <AnimatePresence>
            {showBlurredJobs && filteredJobs.length > 6 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mt-4"
              >
                {/* Blurred jobs container */}
                <div className="space-y-4 blur-[6px] select-none pointer-events-none">
                  {filteredJobs.slice(6, 12).map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <div
                        className={`bg-white rounded-2xl p-6 border ${
                          job.featured ? 'border-[#ED9F08]/30 ring-1 ring-[#ED9F08]/10' : 'border-gray-100'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center text-white font-bold text-xl">
                              {job.logo}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {job.title}
                              </h3>
                              {job.featured && (
                                <span className="px-2 py-0.5 text-xs font-medium bg-[#ED9F08]/10 text-[#ED9F08] rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPinIcon className="h-4 w-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <BriefcaseIcon className="h-4 w-4" />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <CurrencyDollarIcon className="h-4 w-4" />
                                {job.salary}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:justify-end">
                            {job.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Registration Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent"
                >
                  <div className="text-center px-6 py-12 max-w-lg">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center">
                        <BriefcaseIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        More Jobs Waiting for You
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Create a free account to view all job listings, save your favorites, and apply with one click.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={`${APP_URL}/register`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#0B2652]/25 hover:shadow-xl transition-all duration-300"
                        >
                          Create Free Account
                        </a>
                        <a
                          href={`${APP_URL}/login`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-200 px-6 py-3 text-base font-semibold text-gray-700 hover:border-[#0B2652] hover:text-[#0B2652] transition-all duration-300"
                        >
                          Sign In
                        </a>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">
                        Free to join • No credit card required
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BriefcaseIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}

          {/* Load More */}
          {filteredJobs.length > 6 && !showBlurredJobs && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowBlurredJobs(true)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:border-[#0B2652] hover:text-[#0B2652] transition-colors"
              >
                Load More Jobs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Create your profile and let employers find you. Get notified when new jobs match your skills.
          </p>
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl transition-all duration-300"
          >
            Create Your Profile
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
