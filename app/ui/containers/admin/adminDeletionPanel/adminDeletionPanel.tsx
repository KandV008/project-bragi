"use client";

import { useContext } from "react";
import { Protect } from "@clerk/nextjs";
import { DeletingContext } from "@/app/ui/components/contexts/deletingContext";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface AdminPanelProps {
    action: (ids: string[]) => Promise<void>;
    updateDeletionStatus: () => void;
}

/**
 * This component serves as the main dashboard for administrators, providing navigation
 * options to manage different sections of the application, such as products, offers,
 * and news. It also allows users to exit back to their profile.
 *
 * @returns {JSX.Element} The rendered Admin Dashboard component.
 */
export default function AdminDeletionPanel({
  action,
  updateDeletionStatus
}: AdminPanelProps): JSX.Element {
  const { selectedValues, setSelectedValues } = useContext(DeletingContext);

  return (
    <Protect permission="org:product:managment">
        <div 
          className=" flex flex-col gap-2 justify-center fixed bottom-4 right-4 z-50"
        >
          {selectedValues.length !== 0 && (
            <MediumButtonWithIcon
              icon={faArrowRight}
              text={"Continuar"}
              subtext={""}
              type={"danger"}
              onClick={() => {
                action(selectedValues)
              }}
            />
          )}

          <MediumButtonWithIcon
            icon={faTrashCan}
            text={"Borrar entidades"}
            subtext={""}
            type={"warning"}
            onClick={updateDeletionStatus}
          />
        </div>
    </Protect>
  );
}
