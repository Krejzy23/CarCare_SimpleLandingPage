import { BarChart3, CalendarCheck, Car, CircleDollarSign, Wrench } from "lucide-react";

import type { ShowcaseItem } from "../../constants";

type ShowcasePreviewProps = {
  item: ShowcaseItem;
};

function ShowcasePreview({ item }: ShowcasePreviewProps) {
  if (item.preview === "costs") {
    return (
      <div className="rounded-lg border border-line bg-surface p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-black text-muted">Ownership costs</p>
            <h4 className="mt-1 text-3xl font-black text-ink">$1,842</h4>
          </div>
          <CircleDollarSign className="text-signal" size={34} />
        </div>
        <div className="mt-6 grid grid-cols-6 items-end gap-2">
          {[48, 72, 38, 88, 55, 66].map((height, index) => (
            <span
              key={height + index}
              className="rounded-t-md bg-signal"
              style={{ height: `${height + 20}px` }}
            />
          ))}
        </div>
        <div className="mt-6 grid gap-2 text-sm">
          <div className="flex items-center justify-between rounded-md bg-paper p-3">
            <span className="font-bold text-muted">Fuel</span>
            <strong className="text-ink">$920</strong>
          </div>
          <div className="flex items-center justify-between rounded-md bg-paper p-3">
            <span className="font-bold text-muted">Service</span>
            <strong className="text-ink">$672</strong>
          </div>
        </div>
      </div>
    );
  }

  if (item.preview === "reminders") {
    return (
      <div className="rounded-lg border border-line bg-surface p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-black text-ink">Upcoming service</h4>
          <CalendarCheck className="text-signal" size={30} />
        </div>
        <div className="mt-5 space-y-3">
          {[
            ["Inspection", "24 days", "bg-warning"],
            ["Oil service", "1,200 km", "bg-signal"],
            ["Insurance", "42 days", "bg-electric"],
          ].map(([label, detail, tone]) => (
            <div key={label} className="flex items-center gap-3 rounded-md bg-paper p-3">
              <span className={`h-3 w-3 rounded-full ${tone}`} />
              <div className="flex-1">
                <p className="font-black text-ink">{label}</p>
                <p className="text-sm text-muted">Due in {detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-black text-ink">Garage</h4>
        <Car className="text-signal" size={30} />
      </div>
      <div className="mt-5 space-y-3">
        {["Skoda Octavia", "Toyota Corolla", "VW Golf"].map((vehicle, index) => (
          <div key={vehicle} className="flex items-center gap-3 rounded-md bg-paper p-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-rubber text-signal">
              {index === 0 ? <Wrench size={19} /> : <BarChart3 size={19} />}
            </div>
            <div>
              <p className="font-black text-ink">{vehicle}</p>
              <p className="text-sm text-muted">
                {index === 0 ? "Oil service soon" : "Records up to date"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowcasePreview;
