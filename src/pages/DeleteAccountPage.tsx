import { supportEmail } from "../constants";
import LegalSection from "../components/ui/LegalSection";

function DeleteAccountPage() {
  return (
    <LegalSection
      id="delete-account"
      eyebrow="CarCare account deletion"
      title="Delete your account and data"
      intro="You can permanently delete your CarCare account and associated app data directly in the mobile app."
    >
      <h2>Delete inside the app</h2>
      <ol>
        <li>Open the CarCare app and sign in to your account.</li>
        <li>Go to Settings.</li>
        <li>Scroll to Danger Zone.</li>
        <li>Tap Delete account and data.</li>
        <li>Confirm the deletion prompt.</li>
      </ol>
      <p>
        If the app asks you to sign in again, log out and log back in, then
        repeat the steps. This protects your account from accidental deletion
        after an old session.
      </p>

      <h2>What is deleted</h2>
      <p>
        Deleting your account removes your CarCare user account and the data
        connected to it, including vehicles, vehicle details, maintenance
        records, service reminders, fuel entries and mileage history.
      </p>

      <h2>What may remain</h2>
      <p>
        Data exported by you to CSV or PDF is stored outside CarCare and is not
        deleted from your device or places where you saved or shared it.
        Anonymous infrastructure logs may remain with service providers for a
        limited period for security and reliability.
      </p>

      <h2>Request deletion by email</h2>
      <p>
        If you cannot access the app, email{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a> from the email
        address connected to your CarCare account and ask for account deletion.
      </p>
    </LegalSection>
  );
}

export default DeleteAccountPage;
