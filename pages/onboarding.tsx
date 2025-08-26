"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import {
  PricingStep,
  FeaturesStep,
  ProjectStep,
  RoleStep,
  PlatformStep,
  ReferralStep,
  PersonalStep,
} from "@/components/OnboardingSteps";

interface OnboardingData {
  plan: string;
  features: string[];
  projectType: string;
  userRole: string;
  platform: string;
  referralSource: string;
  personalInfo: {
    name: string;
    dateOfBirth: {
      day: string;
      month: string;
      year: string;
    };
    language: string;
  };
}

const steps = [
  "personal",
  "features",
  "project",
  "role",
  "platform",
  "referral",
  "pricing",
];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    plan: "",
    features: [],
    projectType: "",
    userRole: "",
    platform: "",
    referralSource: "",
    personalInfo: {
      name: "",
      dateOfBirth: { day: "", month: "", year: "" },
      language: "English",
    },
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const skip = () => {
    nextStep();
  };

  const handleComplete = () => {
    localStorage.setItem("onboardingData", JSON.stringify(data));
    router.push("/dashboard");
  };

  const updateData = (field: string, value: unknown) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Progress Indicator */}
      <div className="fixed bottom-8 flex space-x-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentStep ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      <div className="w-full max-w-4xl mb-20">
        {currentStep === 0 && (
          <PersonalStep
            selectedValue={data.personalInfo}
            onSelect={(info) => updateData("personalInfo", info)}
            onNext={nextStep}
          />
        )}

        {currentStep === 1 && (
          <FeaturesStep
            selectedValue={data.features}
            onSelect={(features) => updateData("features", features)}
            onNext={nextStep}
            onSkip={skip}
          />
        )}

        {currentStep === 2 && (
          <ProjectStep
            selectedValue={data.projectType}
            onSelect={(project) => updateData("projectType", project)}
            onNext={nextStep}
            onSkip={skip}
          />
        )}

        {currentStep === 3 && (
          <RoleStep
            selectedValue={data.userRole}
            onSelect={(role) => updateData("userRole", role)}
            onNext={nextStep}
            onSkip={skip}
          />
        )}

        {currentStep === 4 && (
          <PlatformStep
            selectedValue={data.platform}
            onSelect={(platform) => updateData("platform", platform)}
            onNext={nextStep}
          />
        )}

        {currentStep === 5 && (
          <ReferralStep
            selectedValue={data.referralSource}
            onSelect={(source) => updateData("referralSource", source)}
            onNext={nextStep}
            onSkip={skip}
          />
        )}

        {currentStep === 6 && (
          <PricingStep
            selectedValue={data.plan}
            onSelect={(plan) => updateData("plan", plan)}
            onNext={handleComplete}
            onSkip={handleComplete}
          />
        )}
      </div>
    </div>
  );
}
