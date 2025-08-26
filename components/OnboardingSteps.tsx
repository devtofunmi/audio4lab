import {
  FaPodcast,
  FaUsers,
  FaBriefcase,
  FaGoogle,
  FaLinkedin,
  FaInstagram,
  FaEllipsisH,
  FaTiktok,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

interface StepProps {
  onNext: () => void;
  onSkip?: () => void;
  selectedValue?: string | string[] | PersonalInfo;
  onSelect?: (value: string | string[] | PersonalInfo) => void;
}

interface PersonalInfo {
  name?: string;
  dateOfBirth?: {
    day?: string;
    month?: string;
    year?: string;
  };
  language?: string;
}

export function PricingStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Start Your Audio4Lab Journey</h1>
      <p className="text-gray-400 mb-8">Get started with our free trial</p>

      <div className="flex justify-center mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              🎵 Free Trial
            </span>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Music Creator Plan</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-green-400">FREE</span>
              <span className="text-gray-400 block text-sm">
                for first 4 music edits
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Try our music creation tools risk-free, then continue with our
              affordable subscription
            </p>
          </div>

          <div className="border-t border-gray-700 pt-6 mb-6">
            <h4 className="font-semibold mb-4 text-left">
              What&apos;s included:
            </h4>
            <ul className="space-y-3 text-sm text-left">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>4
                free music edits to get started
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                Full access to AI music tools
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                High-quality audio output
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                No credit card required
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-xs text-gray-400 mb-4">
              After your free edits, continue for just{" "}
              <span className="text-white font-semibold">$9.99/month</span> with
              unlimited music creation
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Maybe Later
        </button>
        <button
          onClick={() => {
            onSelect?.("free-trial");
            onNext();
          }}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
        >
          Start Free Trial
        </button>
      </div>
    </div>
  );
}

export function FeaturesStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  const features = [
    { id: "text-to-speech", name: "Text to speech", icon: "🗣️" },
    { id: "audiobooks", name: "Audiobooks", icon: "📚" },
    { id: "music", name: "Music", icon: "🎵" },
    { id: "sound-effects", name: "Sound effects", icon: "🔊" },
    { id: "dubbing", name: "Dubbing", icon: "🎬" },
    { id: "voice-overs", name: "Voice overs", icon: "🎤" },
    { id: "voice-cloning", name: "Voice cloning", icon: "👥" },
    { id: "speech-to-text", name: "Speech to text", icon: "📝" },
    { id: "conversational-ai", name: "Conversational AI", icon: "🤖" },
  ];

  const toggleFeature = (featureId: string) => {
    const currentFeatures = Array.isArray(selectedValue) ? selectedValue : [];
    const newFeatures = currentFeatures.includes(featureId)
      ? currentFeatures.filter((f: string) => f !== featureId)
      : [...currentFeatures, featureId];
    onSelect?.(newFeatures);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">
        What would you like to do with Audio4Lab?
      </h1>
      <p className="text-gray-400 mb-8">Select all that apply</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`bg-gray-900 border rounded-2xl p-6 cursor-pointer transition-all hover:border-gray-600 ${
              Array.isArray(selectedValue) && selectedValue.includes(feature.id)
                ? "border-white bg-gray-800"
                : "border-gray-800"
            }`}
            onClick={() => toggleFeature(feature.id)}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold">{feature.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white cursor-pointer"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function ProjectStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  const projects = [
    { id: "personal", name: "Personal project", icon: "👤" },
    { id: "work", name: "Work project", icon: "💼" },
    { id: "other", name: "Other", icon: "⋯" },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        What kind of project are you working on?
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-900 border rounded-2xl p-6 cursor-pointer transition-all hover:border-gray-600 min-w-[200px] ${
              selectedValue === project.id
                ? "border-white bg-gray-800"
                : "border-gray-800"
            }`}
            onClick={() => onSelect?.(project.id)}
          >
            <div className="text-2xl mb-3">{project.icon}</div>
            <h3 className="font-semibold">{project.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white cursor-pointer"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function RoleStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  const roles = [
    { id: "personal", name: "Personal use", icon: "⚙️" },
    { id: "creator", name: "Creator", icon: "📱" },
    { id: "business", name: "Content business", icon: "🎤" },
    { id: "voice-actor", name: "Voice actor", icon: "🎭" },
    { id: "engineer", name: "Engineer", icon: "💻" },
    { id: "marketer", name: "Marketer", icon: "📊" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "other", name: "Other", icon: "⋯" },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Which one describes you the best?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`bg-gray-900 border rounded-2xl p-6 cursor-pointer transition-all hover:border-gray-600 ${
              selectedValue === role.id
                ? "border-white bg-gray-800"
                : "border-gray-800"
            }`}
            onClick={() => onSelect?.(role.id)}
          >
            <div className="text-2xl mb-3">{role.icon}</div>
            <h3 className="font-semibold">{role.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white cursor-pointer"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function PlatformStep({ onNext, selectedValue, onSelect }: StepProps) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Choose your platform</h1>
      <p className="text-gray-400 mb-8">Switch between platforms at any time</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Creative Platform */}
        <div
          className={`bg-gray-900 border rounded-2xl p-8 cursor-pointer transition-all ${
            selectedValue === "creative" ? "border-white" : "border-gray-800"
          }`}
          onClick={() => onSelect?.("creative")}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-xl">🎵</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Creative Platform</h3>
              <p className="text-gray-400">Create AI audio</p>
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-semibold mb-4">Features</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📝</span> Text to Speech
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔄</span> Voice Changer
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔊</span> Sound Effects
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎤</span> Voice Isolator
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎬</span> Studio
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎭</span> Dubbing
              </div>
              <div className="flex items-center">
                <span className="mr-2">📄</span> Speech to Text
              </div>
              <div className="flex items-center">
                <span className="mr-2 bg-blue-600 text-xs px-1 rounded">
                  New
                </span>{" "}
                Music
              </div>
            </div>
          </div>
        </div>

        {/* Conversational AI */}
        <div
          className={`bg-gray-900 border rounded-2xl p-8 cursor-pointer transition-all ${
            selectedValue === "conversational"
              ? "border-white"
              : "border-gray-800"
          }`}
          onClick={() => onSelect?.("conversational")}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Conversational AI</h3>
              <p className="text-gray-400">Build and manage your AI agents</p>
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-semibold mb-4">Features</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center">
                <span className="mr-2">🤖</span> Agents
              </div>
              <div className="flex items-center">
                <span className="mr-2">📚</span> Knowledge Base
              </div>
              <div className="flex items-center">
                <span className="mr-2">🛠️</span> Tools
              </div>
              <div className="flex items-center">
                <span className="mr-2">💬</span> Conversations
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔗</span> Integrations
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span> Phone numbers
              </div>
              <div className="flex items-center">
                <span className="mr-2">📤</span> Outbound
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 font-semibold cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}

export function ReferralStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  const sources = [
    { id: "podcast", name: "Podcast", icon: FaPodcast },
    { id: "friends", name: "Friends or School", icon: FaUsers },
    { id: "work", name: "From work", icon: FaBriefcase },
    { id: "tiktok", name: "TikTok", icon: FaTiktok },
    { id: "google", name: "Google", icon: FaGoogle },
    { id: "x", name: "X", icon: CiTwitter },
    { id: "linkedin", name: "LinkedIn", icon: FaLinkedin },
    { id: "instagram", name: "Instagram", icon: FaInstagram },
    { id: "other", name: "Other", icon: FaEllipsisH },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        How did you hear about Audio4Lab?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {sources.map((source) => (
          <div
            key={source.id}
            className={`bg-gray-900 border rounded-2xl p-6 cursor-pointer transition-all hover:border-gray-600 ${
              selectedValue === source.id
                ? "border-white bg-gray-800"
                : "border-gray-800"
            }`}
            onClick={() => onSelect?.(source.id)}
          >
            <div className="text-2xl mb-3">
              <source.icon className="mx-auto" />
            </div>
            <h3 className="font-semibold text-sm">{source.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white cursor-pointer"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function PersonalStep({ onNext, selectedValue, onSelect }: StepProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const personalInfo = (selectedValue as PersonalInfo) || {};

  const updateField = (field: string, value: string) => {
    onSelect?.({ ...personalInfo, [field]: value });
  };

  const updateDateOfBirth = (field: string, value: string) => {
    onSelect?.({
      ...personalInfo,
      dateOfBirth: { ...personalInfo.dateOfBirth, [field]: value },
    });
  };

  return (
    <div className="text-center max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Help us personalize your experience
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-left text-sm font-medium mb-2">
            What&apos;s your name?
          </label>
          <input
            type="text"
            value={personalInfo.name || ""}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            placeholder="Patricia"
          />
        </div>

        <div>
          <label className="block text-left text-sm font-medium mb-2">
            What&apos;s your date of birth?
          </label>
          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              value={personalInfo.dateOfBirth?.day || ""}
              onChange={(e) => updateDateOfBirth("day", e.target.value)}
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
              placeholder="DD"
              maxLength={2}
            />
            <select
              value={personalInfo.dateOfBirth?.month || ""}
              onChange={(e) => updateDateOfBirth("month", e.target.value)}
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={personalInfo.dateOfBirth?.year || ""}
              onChange={(e) => updateDateOfBirth("year", e.target.value)}
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
              placeholder="YYYY"
              maxLength={4}
            />
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full mt-8 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 font-semibold cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
}
