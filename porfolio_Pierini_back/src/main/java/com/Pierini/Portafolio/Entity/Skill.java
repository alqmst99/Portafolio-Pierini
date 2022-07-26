
package com.Pierini.Portafolio.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Pieirni Nahuel Nicolas 
 * @email nahuel.pierini90@hotmial.com
 */
@Entity
public class Skill {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id ;
private String name;
private int porcent;
//constructors

  
    public Skill() {
    }

  
    public Skill(String name, int percent) {
        this.name = name;
        this.porcent = percent;
    }
//Getters & Setters

   
    public int getId() {
        return id;
    }

    
    public void setId(int id) {
        this.id = id;
    }

   
    public String getName() {
        return name;
    }

   
    public void setName(String name) {
        this.name = name;
    }

  
    public int getPorcent() {
        return porcent;
    }

  
    public void setPorcent(int porcent) {
        this.porcent = porcent;
    }
    
}
