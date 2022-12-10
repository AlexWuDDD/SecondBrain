#include <limits>
#include <vector>
#include <iostream>

class Ray{};
class Point{};
class Normal{};
class Object{};

float minDistance;
Point lightPosition;
std::vector<std::vector<int>> pixels;

void computePrimRay(int i, int j, Ray *primRay){}
bool Intersect(Object obj, Ray primRay, Point *pHit, Normal* nHits){}
float Distance(Point p1, Point p2){}

void pseudocode(int imageHeight, int imageWidth, std::vector<Object> objects, Point eyePosition){
  for(int j = 0; j < imageHeight; ++j){
    for(int i = 0; i < imageWidth; ++i){
      //compute primary ray direction
      Ray primRay;
      computePrimRay(i, j, &primRay);
      //shoot prim ray in the scence and search for intersection
      Point pHit;
      Normal nHit;
      float minDist = std::numeric_limits<float>::infinity();
      Object object = nullptr;
      for(int k = 0; k < objects.size(); ++k){
        if(Intersect(objects[k], primRay, &pHit, &nHit)){
          float distance = Distance(eyePosition, pHit);
          if(distance < minDistance){
            object = objects[k];
            minDistance = distance; //update min distance
          }
        }
      }

      bool isInShadow = false;

      if(object != nullptr){
        //compute illumination
        Ray shadowRay;
        shadowRay.direction = lightPosition - pHit;
        for(int k = 0; k < objects.size(); ++k){
          if(Intersect(object[k], shadowRay)){
            isInShadow = true;
            break;
          }
        }
      }

      if(!isInShadow){
        pixels[i][j] = object->color*light.brightness;
      }
      else
        pixels[i][j] = 0;

    }
  }
}