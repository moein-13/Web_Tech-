<?php
class Book{
    public $title;
    public $author;
    public $year;

    public function __construct($title , $author , $year){
        $this->title = $title;
        $this->author = $author;
        $this->year = $year;
     
    }
    public function get_details(){
        return "Book Details :  '{$this->title}' by '{$this->author}' published in '{$this->year}'";

    }
    public function setTitle($title){
        $this->title = $title; 
    }
    public function setAuthor($author){
        $this->author = $author;
    }
    public function setYear($year){
        $this->year = $year;
    }
}

    $myBook = new Book("FilmyMan", "Moein", 2030);

    echo $myBook->get_details();
    echo "\n";
    echo "\n";

    $myBook->setTitle("FilmyMan_Returns");
    $myBook->setAuthor("Moein");
    $myBook->setYear(2032);

    echo $myBook->get_details();
    
?>