import {useState} from "react";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Mail, MessageSquare} from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    preferredContact: z.enum(["whatsapp", "email"])
});

type FormValues = z.infer<typeof formSchema>;

export function useContactUsDialog({contactEmail, contactPhone}: { contactEmail: string; contactPhone: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            preferredContact: "whatsapp"
        }
    });

    const onSubmit = (data: FormValues) => {
        if (!data) return; // Early return if data is missing

        const {name, email, phone, message, preferredContact} = data;

        if (preferredContact === "whatsapp") {
            const textMessage = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`
            );
            const whatsappUrl = `https://wa.me/${contactPhone}?text=${textMessage}`;
            window.open(whatsappUrl, "_blank");
            setIsOpen(false);
            form.reset();
            return;
        }

        if (preferredContact === "email") {
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\nPhone: ${phone}\nMessage: ${message}\nEmail: ${email}`
            );
            const mailtoUrl = `mailto:${contactEmail}?subject=Contact Form Submission&body=${mailtoBody}`;
            window.location.href = mailtoUrl;
            setIsOpen(false);
            form.reset();
            return; // Early return after handling Email
        }

        // Early return if preferredContact is neither "whatsapp" nor "email"
        console.error("Invalid preferred contact method.");
        return;
    };


    const openContactUsModal = () => {
        setIsOpen(true)
    };
    const ContactUsDialog = () => (
        <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box bg-base-100">
                <form method="dialog">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                </form>

                <h3 className="font-bold text-2xl text-center mb-6 text-base-content">Get in Touch</h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-3">
                        <label className="label">
                            <span className="label-text text-base-content">Preferred Contact Method</span>
                        </label>
                        <div className="flex space-x-4">
                            <label className="label cursor-pointer gap-2">
                                <input
                                    type="radio"
                                    className="radio radio-primary"
                                    value="whatsapp"
                                    {...form.register("preferredContact")}
                                />
                                <span className="label-text flex items-center gap-1">
                    <MessageSquare className="h-4 w-4"/>
                    WhatsApp
                  </span>
                            </label>
                            <label className="label cursor-pointer gap-2">
                                <input
                                    type="radio"
                                    className="radio radio-primary"
                                    value="email"
                                    {...form.register("preferredContact")}
                                />
                                <span className="label-text flex items-center gap-1">
                    <Mail className="h-4 w-4"/>
                    Email
                  </span>
                            </label>
                        </div>
                        {form.formState.errors.preferredContact && (
                            <p className="text-error text-sm mt-1">
                                {form.formState.errors.preferredContact.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base-content">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="input input-bordered w-full bg-base-200"
                            {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                            <p className="text-error text-sm mt-1">
                                {form.formState.errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base-content">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="input input-bordered w-full bg-base-200"
                            {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                            <p className="text-error text-sm mt-1">
                                {form.formState.errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base-content">Phone Number (with country code)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="+1234567890"
                            className="input input-bordered w-full bg-base-200"
                            {...form.register("phone")}
                        />
                        {form.formState.errors.phone && (
                            <p className="text-error text-sm mt-1">
                                {form.formState.errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-base-content">Message</span>
                        </label>
                        <textarea
                            placeholder="Tell us how we can help..."
                            className="textarea textarea-bordered h-24 bg-base-200"
                            {...form.register("message")}
                        />
                        {form.formState.errors.message && (
                            <p className="text-error text-sm mt-1">
                                {form.formState.errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setIsOpen(false)}>close</button>
            </form>
        </dialog>
    );

    return {
        openContactUsModal,
        ContactUsDialog,
    };
}
