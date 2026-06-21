import { supportEmail } from "../constants";
import LegalSection from "../components/ui/LegalSection";

function PrivacyPolicyPage() {
  return (
    <LegalSection
      id="privacy"
      eyebrow="Last updated: May 19, 2026"
      title="Privacy Policy"
      intro="This Privacy Policy explains how CarCare handles information when you use the CarCare mobile application."
    >
      <h2>Information we collect</h2>
      <p>CarCare may collect and store information you choose to add to the app, including:</p>
      <ul>
        <li>Account information, such as your email address and authentication provider.</li>
        <li>Vehicle information, such as brand, model, year, mileage, fuel type, VIN, license plate, insurance policy number and document expiry dates.</li>
        <li>Maintenance records, such as service type, title, notes, costs, mileage and due dates.</li>
        <li>Fuel entries, such as date, fuel type, amount, cost, mileage, station name and notes.</li>
        <li>Mileage entries, such as mileage value, date, source and note.</li>
        <li>App preferences, such as language, currency, units and reminder settings.</li>
      </ul>

      <h2>How we use information</h2>
      <p>
        We use your information to provide app features, including syncing your
        garage, showing dashboards, calculating costs, creating exports and
        scheduling local service reminders.
      </p>

      <h2>Storage and service providers</h2>
      <p>
        CarCare uses Firebase services from Google for authentication and cloud
        database storage. Your account and garage data are associated with your
        user account so they can be synced when you sign in.
      </p>

      <h2>Notifications</h2>
      <p>
        CarCare can schedule local reminders for service dates, mileage windows
        and document expiry dates. You can disable reminders in the app settings
        or your device settings.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal information. We do not share your
        information with third parties for advertising. Information may be
        processed by service providers that operate the app infrastructure, such
        as Firebase.
      </p>

      <h2>Data export and deletion</h2>
      <p>
        You can export your data from the app as CSV or PDF. You can also delete
        your account and app data from the app settings.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </LegalSection>
  );
}

export default PrivacyPolicyPage;
