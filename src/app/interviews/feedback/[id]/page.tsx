/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getInterview } from "../../../../../actions/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InterviewClient from "@/components/feedback/InterviewClient";
import FeedbackSection from "@/components/feedback/FeedbackSection";

export default async function InterviewPage({
  params: { id },
}: {
  params: { id: any };
}) {
  const interview = await getInterview(id);
  const { jobTitle, questions } = interview;

  return (
    <div className="mx-auto w-full">
      <div className="absolute top-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-35%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="md:w-2/3  w-11/12 py-10 mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl mb-5gap-2">
            Mülakat Konusu:{" "}
            <span className="text-primary">
              {jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}
            </span>
          </h2>
          <FeedbackSection questions={questions} interviewId={id} />
        </div>
        {questions.map((question: any) => (
          <Card
            key={question.id}
            className="shadow-md bg-transparent shadow-slate-950 mb-8"
          >
            <CardHeader>
              <CardTitle>Soru: {question.questionText}</CardTitle>
            </CardHeader>
            <CardContent>
              <InterviewClient question={question} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
