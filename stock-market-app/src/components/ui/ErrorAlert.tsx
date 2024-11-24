import { AlertCircle } from "lucide-react";

import
{
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

//TODO: well typed error
export function ErrorAlert({ error }: Readonly<{ error: any; }>)
{
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {error.message}
      </AlertDescription>
    </Alert>
  );
}