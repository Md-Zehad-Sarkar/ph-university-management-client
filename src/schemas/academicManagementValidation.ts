import { z } from "zod";

export const createAcademicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a name" }),
  year: z.string({ required_error: "Year is required" }),
  startMonth: z.string({ required_error: "Start month is required" }),
  endMonth: z.string({ required_error: "Start month is required" }),
});
