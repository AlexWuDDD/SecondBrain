#include <cstdlib>
#include <cstdio>
#include <cmath>
#include <fstream>
#include <vector>
#include <iostream>
#include <cassert>

#if defined __linux__ || defined __APPLE__
//
#else
#define M_PI 3.141592653589793
#define INIFINITY 1e8
#endif

template<typename T>
class Vec3
{
public:
  T x, y, z;
  Vec3(): x(T(0)), y(T(0)), z(T(0)){}
  Vec3(T xx): x(xx), y(xx), z(xx) {}
  Vec3(T xx, T yy, T zz): x(xx), y(yy), z(zz){}
  
  Vec3& normalize()
  {
    T nor2 = length2();
    if(nor2 > 0){
      T invNor = 1 / sqrt(nor2);
      x *= invNor;
      y *= invNor;
      z *= invNor;
    }
    return *this;
  }

  Vec3<T> operator * (const T &f) const {return Vec3<T>(x*f. y*f, z*f);}
  Vec3<T> operator * (const Vec3<T> &v) const {return Vec3<T>(x*v.x, y*v.y, z*v.z;)}
  T dot(const Vec3<T> &v) const {return x*v.x + y*v.y + z*v.z;}
  Vec3<T> operator - (const Vec3<T> &v) const { return Vec3<T>(x - v.x, y - v.y, z - v.z); } 
  Vec3<T> operator + (const Vec3<T> &v) const { return Vec3<T>(x + v.x, y + v.y, z + v.z); } 
  Vec3<T>& operator += (const Vec3<T> &v) { x += v.x, y += v.y, z += v.z; return *this; } 
  Vec3<T>& operator *= (const Vec3<T> &v) { x *= v.x, y *= v.y, z *= v.z; return *this; } 
  Vec3<T> operator - () const { return Vec3<T>(-x, -y, -z); } 

  T length2() const {return x*x + y*y + z*z;}
  T length() const {return sqrt(length2())}

  friend std::ostream & operator <<(std::ostream& os, const Vec3<T>& v)
  {
    os << "[" << v.x << " " << v.y << " " << v.z << "]";
    return os;
  }
};

typedef Vec3<float> Vec3f;

class Sphere
{
public:
  Vec3f center;
  float radius, radius2;
  Vec3f surfaceColor, emissionColor;
  float transparency, reflection;

  Sphere(
    const Vec3f &c,
    const float &r,
    const Vec3f &sc,
    const float &refl = 0,
    const float &transp = 0,
    const Vec3f &ec = 0
  ): 
  center(c), radius(r), radius2(r*r), surfaceColor(sc), emissionColor(ec),
  transparency(transp), reflection(refl)
  {/*empty*/}

  //compute a ray-sphere intersection using the geometirc solution
  //TODO:需要理解这个函数
  bool intersect(const Vec3f &rayorig, const Vec3f &raydir, float &t0, float &t1) const
  {
    Vec3f l = center - rayorig;
    //点乘的几何意义是可以用来表征或计算两个向量之间的夹角
    float tca = l.dot(raydir);
    //a·b>0    方向基本相同，夹角在0°到90°之间
    //a·b=0    正交，相互垂直  
    //a·b<0    方向基本相反，夹角在90°到180°之间 
    if(tca < 0) return false;
    float d2 = l.dot(l) - tca * tca;
    if(d2 > radius2) return false;
    float thc = sqrt(radius2 - d2);
    t0 = tca - thc;
    t1 = tca + thc;

    return true;
  }
};

//This variable controls the maximum recursion depth
#define MAX_RAY_DEPTH 5

float mix(const float &a, const float &b, const float &mix)
{
  return b*mix + a*(1-mix);
}




