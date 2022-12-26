package DataStructures.NBodySimulation;

public class Body {

  public final static double G = 6.67e-11;
  public final static String pP = "C:\\Users\\superuser\\Documents\\Notes\\DataStructures\\NBodySimulation\\images\\";

  public double xxPos; //its current x position
  public double yyPos; //its current y position
  public double xxVel; //its current velocity in the x direction
  public double yyVel; //its current velocity in the y direction
  public double mass; //its mass

  public String imgFileName; //the name of the file that corresponds to the image that depicts the body

  public Body(double xP, double yP, double xV, double yV, double m, String img){
    xxPos = xP;
    yyPos = yP;
    xxVel = xV;
    yyVel = yV;
    mass = m;
    imgFileName = img;
  }

  public Body(Body b){
    xxPos = b.xxPos;
    yyPos = b.yyPos;
    xxVel = b.xxVel;
    yyVel = b.yyVel;
    mass = b.mass;
    imgFileName = b.imgFileName;
  }

  public double calcDistance(Body b){
    double x2 = Math.pow(xxPos-b.xxPos, 2);
    double y2 = Math.pow(yyPos-b.yyPos, 2);
    return Math.sqrt(x2 + y2);
  }

  public double calcForceExertedBy(Body b){
    return G*mass*b.mass/Math.pow(calcDistance(b), 2);
  }

  public double calcForceExertedByX(Body b){
    return (b.xxPos - xxPos)/calcDistance(b)*calcForceExertedBy(b);
  }

  public double calcForceExertedByY(Body b){
    return (b.yyPos - yyPos)/calcDistance(b)*calcForceExertedBy(b);
  }

  public double calcNetForceExertedByX (Body[] bs){
    
    double sum = 0;

    for(Body b : bs){
      if(b.equals(this)){
        continue;
      }

      sum += calcForceExertedByX(b);
    }

    return sum;
  }

  public double calcNetForceExertedByY (Body[] bs){
    double sum = 0;

    for(Body b : bs){
      if(b.equals(this)){
        continue;
      }

      sum += calcForceExertedByY(b);
    }

    return sum;
  }

  public void update(double dt, double fX, double fY){
    double aX = fX/mass;
    double aY = fY/mass;

    xxVel += aX*dt;
    yyVel += aY*dt;
    
    xxPos += xxVel*dt;
    yyPos += yyVel*dt;
  }

  public void draw(){
    StdDraw.picture(xxPos, yyPos, pP + imgFileName);
  }
}
