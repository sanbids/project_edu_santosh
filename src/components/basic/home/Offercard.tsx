import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Offercard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
  <Card className="hover:scale-110 hover:border-2 hover:border-sky-300/50 hover:shadow-2 duration-300 group">
    <CardHeader className="font-bold text-xl span">{title}</CardHeader>
    <CardContent>
      <p className="dark:text-gray-400">{description}</p>
      <Button className="mt-4" variant="link">
        Learn More
      </Button>
    </CardContent>
  </Card>
  )
}
