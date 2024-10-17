import { Button } from "../ui/button";
import { Input } from "../ui/input";

function NewsLetter() {
  return (
    <div className="container py-32 text-center">
      <h2 className="title-h2">Subcribe Now! and Get Discounts Up To 70%</h2>
      <p className="mt-6 text-neutral-500 mb-12">
        Sign up today and start enjoying amazing benefits, including discounts!
      </p>
      <div className="flex justify-center">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
