import React, { useState } from "react";
import "./widget.css";

// Placeholder for Pico API Key - to be replaced by user or env var
const PICO_API_KEY = "YOUR_PICO_API_KEY_HERE";
const PICO_API_URL = "https://api.pico.homezero.tech/v1/public/assignments";

function App() {
    const [formData, setFormData] = useState({
        postalCode: "",
        houseNumber: "",
        email: "",
        phone: "",
        name: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Construct payload for Pico
            const payload = {
                email: formData.email,
                phone: formData.phone || undefined,
                name: formData.name || undefined,
                address:
                    formData.postalCode || formData.houseNumber
                        ? {
                              postalCode: formData.postalCode || undefined,
                              houseNumber: formData.houseNumber || undefined,
                          }
                        : undefined,
                // Add any other required fields or metadata here
                source: "heative-brochure-widget",
            };

            console.log("Submitting to Pico:", payload);

            // If we don't have a real key, we simulate success for testing purposes
            // UNLESS the user explicitly wants to fail.
            if (PICO_API_KEY === "YOUR_PICO_API_KEY_HERE") {
                console.warn("Using placeholder API key. Simulating success.");
                await new Promise((resolve) => setTimeout(resolve, 1500)); // Fake delay
                setStatus("success");
                return;
            }

            const response = await fetch(PICO_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": PICO_API_KEY,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit request");
            }

            setStatus("success");
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage("Er is iets misgegaan. Probeer het later opnieuw.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="heative-widget">
                <div className="heative-card">
                    <div className="heative-success">
                        <div className="heative-success-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3>Aanvraag ontvangen!</h3>
                        <p>
                            Bedankt voor je interesse. We nemen zo snel mogelijk
                            contact met je op.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="heative-widget">
            <form className="heative-card" onSubmit={handleSubmit}>
                <div className="heative-row">
                    <div className="heative-col">
                        <label className="heative-label" htmlFor="postalCode">
                            Postcode (optioneel)
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            className="heative-input"
                            placeholder="1234 AB"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="heative-col">
                        <label className="heative-label" htmlFor="houseNumber">
                            Huisnummer (optioneel)
                        </label>
                        <input
                            type="text"
                            id="houseNumber"
                            name="houseNumber"
                            className="heative-input"
                            placeholder="10"
                            value={formData.houseNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="heative-col">
                    <label className="heative-label" htmlFor="email">
                        E-mailadres *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="heative-input"
                        placeholder="jouw@email.nl"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="heative-col">
                    <label className="heative-label" htmlFor="phone">
                        Telefoonnummer (optioneel)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="heative-input"
                        placeholder="06 12345678"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="heative-col">
                    <label className="heative-label" htmlFor="name">
                        Naam (optioneel)
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="heative-input"
                        placeholder="Jouw naam"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {errorMessage && (
                    <div style={{ color: "red", fontSize: "0.875rem" }}>
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    className="heative-btn"
                    disabled={status === "loading"}
                >
                    {status === "loading"
                        ? "Even geduld..."
                        : "Brochure aanvragen"}
                </button>
            </form>
        </div>
    );
}

export default App;
