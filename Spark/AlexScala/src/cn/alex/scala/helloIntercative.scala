import scala.io.StdIn.readLine

@main def helloIntercative() = 
  println("Please enter your name:")
  val name = readLine()

  println("Hello, " + name + "!")
