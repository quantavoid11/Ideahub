"use client";

import { useOrganizationList } from "@clerk/nextjs";
import TeamButton from "./TeamButton";

// import { Item } from "./item";

export const Teams= ()=>  {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  console.log(userMemberships);
  
  
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <TeamButton
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  );
};