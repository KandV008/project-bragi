'use server';

import nodemailer from "nodemailer";
import { parseAppointmentForm, parseContactForm } from "./parser";
import { Logger } from "@/app/model/Logger";

require("dotenv").config({ path: ".env.local" });

const CONTEXT = "EMAIL"

/**
 * Creates a transporter for sending emails using Nodemailer.
 */
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    requireTLS: true,
    port: 465,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

/**
 * Sends a contact email with the provided form data.
 *
 * @param {FormData} formData - The form data containing email, subject, and body.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 */
export async function sendContactEmail(formData: FormData): Promise<void> {
    Logger.startFunction(CONTEXT, "sendContactEmail")

    const { email, subject, body } = parseContactForm(formData)

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: "contact@audifonosxmenos.com",
        subject: "Contacto: " + subject,
        text: "Correo electrónico: " + email + "\nCuerpo del Mensaje: " + body,
    });

    Logger.endFunction(CONTEXT, "sendContactEmail", info.messageId)
}

/**
 * Sends an appointment email with the provided form data.
 * Extracts user details from the form and sends an email to the contact address.
 *
 * @param {FormData} formData - The form data containing user input.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendAppointmentEmail(formData: FormData): Promise<void> {
    Logger.startFunction(CONTEXT, "sendAppointmentEmail")

    const { userName, email, phoneNumber, body } = parseAppointmentForm(formData)

    const info = await transporter.sendMail({
        from: "contact@audifonosxmenos.com",
        to: "contact@audifonosxmenos.com",
        subject: "Cita: " + userName,
        text: "Correo electrónico: " + email + "\nNúmero de teléfono: " + phoneNumber + "\nConsideraciones: " + body,
    });

    Logger.endFunction(CONTEXT, "sendAppointmentEmail", info.messageId)
}