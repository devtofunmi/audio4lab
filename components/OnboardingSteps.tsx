import {
  MusicPlay,
  Book,
  VolumeHigh,
  MusicFilter,
  VideoPlay,
  Microphone,
  Camera,
  Music,
  Headphone,
  Game,
  Heart,
} from "iconsax-react";

interface StepProps {
  onNext: () => void;
  onSkip?: () => void;
  selectedValue?: string | string[] | PersonalInfo;
  onSelect?: (value: string | string[] | PersonalInfo) => void;
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface PersonalInfo {
  name: string;
  email: string;
  password: string;
  dateOfBirth?: {
    day?: string;
    month?: string;
    year?: string;
  };
  language?: string;
}

const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  dateOfBirth: z
    .object({
      day: z.string().optional(),
      month: z.string().optional(),
      year: z.string().optional(),
    })
    .optional(),
  language: z.string().optional(),
});

export function PricingStep({
  onNext,
  onSkip,
  onSelect,
}: StepProps) {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Start Your Music Creation Journey
      </h1>
      <p className="text-gray-400 mb-8">Get started with our free trial</p>

      <div className="flex justify-center mb-8">
        <div className="bg-[#171717] border-2 border-gray-600 rounded-2xl p-8 max-w-md w-full relative shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <MusicPlay size="16" />
              Free Trial
            </span>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Music Creator Plan
            </h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">FREE</span>
              <span className="text-gray-400 block text-sm">
                for first 5 music generations
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Try our AI music creation tools risk-free, then continue with our
              affordable subscription
            </p>
          </div>

          <div className="border-t border-gray-600 pt-6 mb-6">
            <h4 className="font-semibold mb-4 text-left text-white">
              What&apos;s included:
            </h4>
            <ul className="space-y-3 text-sm text-left">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className="text-gray-300">5 free music generations</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className="text-gray-300">
                  Access to 10K+ sample library
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className="text-gray-300">
                  AI sound effects generator
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className="text-gray-300">
                  High-quality audio output (48kHz)
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <span className="text-gray-300">No credit card required</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-600 pt-6">
            <p className="text-xs text-gray-400 mb-4">
              After your free generations, continue for just{" "}
              <span className="text-white font-semibold">$12.99/month</span>{" "}
              with unlimited music creation and premium features
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
          className="px-8 py-3 bg-white hover:bg-gray-200 text-black rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:scale-105"
        >
          Start Free Trial
        </button>
      </div>
    </div>
  );
}

export function MusicInterestsStep({
  onNext,
  onSkip,
  selectedValue,
  onSelect,
}: StepProps) {
  const interests = [
    {
      id: "ai-music-generation",
      name: "AI Music Generation",
      icon: MusicPlay,
      description: "Create original music tracks in any genre",
    },
    {
      id: "sample-library",
      name: "Premium Sample Library",
      icon: Book,
      description: "Access 10K+ high-quality samples and loops",
    },
    {
      id: "sound-effects",
      name: "Sound Effects Generator",
      icon: VolumeHigh,
      description: "Generate custom sound effects with AI",
    },
    {
      id: "music-editing",
      name: "Music Editing Suite",
      icon: MusicFilter,
      description: "Professional editing and mastering tools",
    },
  ];

  const toggleInterest = (interestId: string) => {
    const currentInterests = Array.isArray(selectedValue) ? selectedValue : [];
    const newInterests = currentInterests.includes(interestId)
      ? currentInterests.filter((f: string) => f !== interestId)
      : [...currentInterests, interestId];
    onSelect?.(newInterests);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4 text-white">
        What music features interest you most?
      </h1>
      <p className="text-gray-400 mb-8">Select all that apply</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {interests.map((interest) => (
          <div
            key={interest.id}
            className={`bg-[#171717] border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              Array.isArray(selectedValue) &&
              selectedValue.includes(interest.id)
                ? "border-white shadow-lg"
                : "border-gray-600 hover:border-gray-500"
            }`}
            onClick={() => toggleInterest(interest.id)}
          >
            <div className="mb-4 flex justify-center">
              <interest.icon size="48" color="white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">
              {interest.name}
            </h3>
            <p className="text-gray-400 text-sm">{interest.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white font-semibold cursor-pointer transition-colors"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 cursor-pointer transition-all duration-200 hover:scale-105"
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
    { id: "music-producer", name: "Music Producer", icon: MusicFilter },
    { id: "content-creator", name: "Content Creator", icon: VideoPlay },
    { id: "podcaster", name: "Podcaster", icon: Microphone },
    { id: "filmmaker", name: "Filmmaker", icon: Camera },
    { id: "musician", name: "Musician", icon: Music },
    { id: "dj", name: "DJ", icon: Headphone },
    { id: "game-developer", name: "Game Developer", icon: Game },
    { id: "hobbyist", name: "Hobbyist", icon: Heart },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-white">
        What best describes your role?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`bg-[#171717] border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              selectedValue === role.id
                ? "border-white shadow-lg"
                : "border-gray-600 hover:border-gray-500"
            }`}
            onClick={() => onSelect?.(role.id)}
          >
            <div className="mb-3 flex justify-center">
              <role.icon size="32" color="white" />
            </div>
            <h3 className="font-semibold text-white">{role.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onSkip}
          className="px-6 py-2 text-gray-400 hover:text-white font-semibold cursor-pointer transition-colors"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 cursor-pointer transition-all duration-200 hover:scale-105"
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

  const { register, handleSubmit, formState, setValue, watch } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: selectedValue as PersonalInfo,
  });

  const personalInfo = watch(); // Watch all fields to keep local state updated

  // Update parent state whenever form values change
  // This is important to ensure data persists across steps if onSelect is used for that purpose
  // useEffect(() => {
  //   onSelect?.(personalInfo);
  // }, [personalInfo, onSelect]);

  const onSubmit = (data: PersonalInfo) => {
    onSelect?.(data);
    onNext();
  };

  const updateDateOfBirth = (field: "day" | "month" | "year", value: string) => {
    const currentDOB = watch("dateOfBirth");
    setValue("dateOfBirth", { ...currentDOB, [field]: value });
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Welcome to Audio4Lab
      </h1>
      <p className="text-gray-400 mb-8">
        Let&apos;s personalize your music creation experience
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div>
            <label className="block text-left text-sm font-medium mb-2 text-white">
              What&apos;s your name?
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-3 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
              placeholder="Enter your name"
            />
            {formState.errors.name && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-left text-sm font-medium mb-2 text-white">
              Your Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
              placeholder="Enter your email"
            />
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-left text-sm font-medium mb-2 text-white">
              Choose a Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-3 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
              placeholder="Enter your password"
            />
            {formState.errors.password && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-left text-sm font-medium mb-2 text-white">
              What&apos;s your date of birth? (Optional)
            </label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                {...register("dateOfBirth.day")}
                className="px-4 py-3 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                placeholder="DD"
                maxLength={2}
              />
              <input
                type="text"
                {...register("dateOfBirth.year")}
                className="px-4 py-3 bg-[#171717] border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                placeholder="YYYY"
                maxLength={4}
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {months.map((month, index) => (
                <button
                  key={month}
                  type="button" // Prevent form submission
                  onClick={() => updateDateOfBirth("month", String(index + 1))}
                  className={`px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                    String(index + 1) === personalInfo.dateOfBirth?.month
                      ? "bg-white text-black"
                      : "bg-[#171717] border-2 border-gray-600 hover:bg-gray-700 text-white"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 px-8 py-3 bg-white text-black rounded-lg font-semibold cursor-pointer"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}
