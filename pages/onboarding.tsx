"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import {
  PricingStep,
  MusicInterestsStep,
  RoleStep,
  PersonalStep,
} from "@/components/OnboardingSteps";
import { toast } from "react-toastify";

interface OnboardingData {
  plan: string;
  musicInterests: string[];
  userRole: string;
  personalInfo: {
    name: string;
    email: string;
    password: string;
    dateOfBirth: {
      day: string;
      month: string;
      year: string;
    };
    language: string;
  };
}

const steps = ["personal", "interests", "role", "pricing"];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    plan: "",
    musicInterests: [],
    userRole: "",
    personalInfo: {
      name: "",
      email: "",
      password: "",
      dateOfBirth: { day: "", month: "", year: "" },
      language: "English",
    },
  });
  const [userId, setUserId] = useState<string | null>(null);

  const nextStep = (id?: string) => {
    if (id) {
      setUserId(id);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const skip = () => {
    nextStep();
  };

  const handleComplete = async () => {
    if (!userId) {
      console.error("User ID not available for updating onboarding data.");
      toast.error("User ID not available. Please try again.");
      return;
    }

    try {
      const response = await fetch("/api/user/update-onboarding-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          musicInterests: data.musicInterests,
          userRole: data.userRole,
          plan: data.plan,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Onboarding data saved successfully!");
        router.push("/dashboard");
      } else {
        toast.error(result.message || "Failed to save onboarding data.");
        console.error("Failed to save onboarding data:", response.statusText);
      }
    } catch (error) {
      toast.error("An unexpected error occurred while saving onboarding data.");
      console.error("Error saving onboarding data:", error);
    }
  };

  const updateData = (field: string, value: unknown) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4">
      {/* Progress Indicator */}
      <div className="fixed bottom-8 flex space-x-2 animate-fade-in-up">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => goToStep(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 ${
              index === currentStep
                ? "bg-white"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            title={`Go to ${step} step`}
          />
        ))}
      </div>

      <div className="w-full max-w-4xl mb-20">
        <div className="step-container">
          {currentStep === 0 && (
            <div className="animate-slide-in">
              <PersonalStep
                selectedValue={data.personalInfo}
                onSelect={(info) => updateData("personalInfo", info)}
                onNext={nextStep}
              />
            </div>
          )}

          {currentStep === 1 && (
            <div className="animate-slide-in">
              <MusicInterestsStep
                selectedValue={data.musicInterests}
                onSelect={(interests) =>
                  updateData("musicInterests", interests)
                }
                onNext={nextStep}
                onSkip={skip}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-slide-in">
              <RoleStep
                selectedValue={data.userRole}
                onSelect={(role) => updateData("userRole", role)}
                onNext={nextStep}
                onSkip={skip}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-slide-in">
              <PricingStep
                selectedValue={data.plan}
                onSelect={(plan) => updateData("plan", plan)}
                onNext={handleComplete}
                onSkip={handleComplete}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out 0.5s both;
        }

        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .step-container > div {
          min-height: 400px;
        }
      `}</style>
    </div>
  );
}
