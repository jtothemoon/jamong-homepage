import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User } from "lucide-react";

const SinglePortfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const { title, image, paragraph, author, tags, publishDate } = portfolio;
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-fit bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] md:aspect-video overflow-hidden rounded-t-xl">
          <Image 
            src={image} 
            alt={title}
            fill 
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-1 right-1 md:top-2 md:right-2 shadow-lg text-xs px-1 py-0.5 md:px-2 md:py-1">
            {tags[0]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 md:p-5 space-y-3">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-all duration-200 text-gray-900 dark:text-gray-100">
          <Link href="/portfolio-details" className="hover:underline">
            {title}
          </Link>
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 md:p-5 pt-0 flex items-center justify-between border-t border-gray-100/50 dark:border-gray-800/50">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8 md:h-9 md:w-9 ring-2 ring-gray-100 dark:ring-gray-800">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium text-gray-900 dark:text-gray-200">{author.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{author.designation}</p>
          </div>
        </div>

        <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 bg-gray-50/80 dark:bg-gray-800/50 px-2 py-1 rounded-full">
          <Calendar className="h-3 w-3 mr-1.5" />
          <span className="font-medium">{publishDate}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SinglePortfolio;