package DataStructures.NBodySimulation;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class NBody {

  public final static String pP = "C:\\Users\\superuser\\Documents\\Notes\\DataStructures\\NBodySimulation\\images\\";

  public static double readRadius(String fileName){
    BufferedReader in = null;
    double ret = -1;
    try{
      in = new BufferedReader(new FileReader(fileName));
      in.readLine();
      ret = Double.parseDouble(in.readLine());
    }
    catch(IOException e){
      System.out.println("NBody - readRadius - err:" + e);
    }
    finally{
      if(in != null){
        try {
          in.close();
        } 
        catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
    return ret;
  }

  public static Body[] readBodies(String fileName){
    ArrayList<Body> bs = new ArrayList<>();
    BufferedReader in = null;
    try{
      in = new BufferedReader(new FileReader(fileName));
      in.readLine();
      in.readLine();
      for(int i = 0; i < 5; ++i){
        String str = in.readLine();
        String[] items = str.split("\s+");
        Body b = new Body(Double.parseDouble(items[1]), Double.parseDouble(items[2]), Double.parseDouble(items[3]), Double.parseDouble(items[4]), Double.parseDouble(items[5]), items[6]);
        bs.add(b);
      }
    }
    catch(IOException e){
      System.out.println("NBody - readRadius - err:" + e);
    }
    finally{
      if(in != null){
        try {
          in.close();
        } 
        catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
    Body[] ret = new Body[bs.size()];
    ret = bs.toArray(ret);
    return ret;
  }

  public static void main(String[] args) {
    double T = 157788000.0;
    double dt = 25000.0;
    String filename = "C:\\Users\\superuser\\Documents\\Notes\\DataStructures\\NBodySimulation\\data\\planets.txt";

    double r = readRadius(filename);
    Body[] bodys = readBodies(filename);

    StdDraw.setXscale(-r, r);
		StdDraw.setYscale(-r, r);

    StdDraw.enableDoubleBuffering();
    StdDraw.clear();

    for(double t = 0; t < T; t += dt){

      double[] xForces = new double[bodys.length];
      double[] yForces = new double[bodys.length];
  
      for(int i = 0; i < bodys.length; ++i){
        xForces[i] = bodys[i].calcNetForceExertedByX(bodys);
        yForces[i] = bodys[i].calcNetForceExertedByY(bodys);
      }
  
      for(int i = 0; i < bodys.length; ++i){
        bodys[i].update(dt, xForces[i], yForces[i]);
      }

      StdDraw.picture(0, 0, pP + "starfield.jpg");
      for(Body b : bodys){
        b.draw();
      }

      StdDraw.show();
      StdDraw.pause(10);
    }

    System.out.printf("%d\n", bodys.length);
    System.out.printf("%.2e\n", r);
    for (int i = 0; i < bodys.length; i++) {
        System.out.printf("%11.4e %11.4e %11.4e %11.4e %11.4e %12s\n",
        bodys[i].xxPos, bodys[i].yyPos, bodys[i].xxVel,
        bodys[i].yyVel, bodys[i].mass, bodys[i].imgFileName);   
    }
  }
}
