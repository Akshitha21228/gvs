import { z } from "zod";

export const enquiryTypes = [
  "Product information",
  "Quotation / tender",
  "Demonstration request",
  "Technical support / AMC",
  "System integration",
  "General enquiry",
] as const;

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  organisation: z.string().trim().min(2, "Please enter your organisation").max(150, "Organisation name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\d\s-]+$/, "Use digits, spaces, +, - or brackets only"),
  product: z.string().trim().max(200).optional().default(""),
  enquiryType: z.enum(enquiryTypes, { errorMap: () => ({ message: "Please choose an enquiry type" }) }),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Message is too long (2000 characters max)"),
  // spam protection
  website: z.string().max(0).optional().default(""),
  startedAt: z.number(),
  sourcePage: z.string().max(200).optional().default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
