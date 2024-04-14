import { Card, Typography } from "@material-tailwind/react";
import React from "react";
 
const TABLE_HEAD = ["Notifications", "", ""];
 
const TABLE_ROWS = [
  {
    notify: "John Michael has sent you a request"
    
  },
  {
    notify: "John Michael has sent you a request"
    
  },
  {
    notify: "John Michael has sent you a request"
  },
  {
    notify: "John Michael has sent you a request"
  },
  {
    notify: "John Michael has sent you a request"
  },
];
 
export function Notifications() {
  return (
    <Card className="h-full w-full overflow-scroll p-14">
      <table className="w-full min-w-max table-auto text-left justify-center p-10">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-2"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ notify }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={notify}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {notify}
                  </Typography>
                </td>
                

                <td className={classes}>
                  <button
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Delete
                  </button>
                </td>

                {/* <td className={classes}>
                  <button
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Reject
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}