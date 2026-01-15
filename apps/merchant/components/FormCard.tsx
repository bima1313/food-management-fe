import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { FC, ReactNode } from "react";

interface FormCardProps {
  className?: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const FormCard: FC<FormCardProps> = ({
  className,
  title,
  children,
  footer,
}) => (
  <Card
    className={cn(
      "w-full max-w-md mx-auto border rounded-xl shadow-sm bg-card p-8",
      className
    )}
  >
    <CardHeader>
      <CardTitle className="text-center text-3xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </Card>
);

export default FormCard;
