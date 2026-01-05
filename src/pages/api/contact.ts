import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const company = formData.get("company");
  if (company) {
    return new Response("Nope", { status: 200 });
  }
  const name = formData.get("name").toString();
  const subject = formData.get("subject").toString();
  const message = formData.get("textarea").toString();

  try {
    await resend.emails.send({
      from: "Lifechord Contact <contact@lifechord.net>",
      to: ["contact@lifechord.net"],
      subject: `Message from ${name} | ` + subject,
      text: `From: ${name}\n\n${message}`,
    });
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/contact?sent=1",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Failed to send", { status: 500 });
  }
};
