package com.spring.core.di;

import java.lang.reflect.Constructor;

class DependencyA{
    private DependencyB dependencyB;
    public void DependencyA(DependencyB dependencyB) {
        this.dependencyB = dependencyB;
    }
}

class DependencyB{
    private DependencyC dependencyC;

    public void DependencyC(DependencyC dependencyC) {
        this.dependencyC = dependencyC;
    }
}

class DependencyC{
    private DependencyA dependencyA;

    public void DependencyC(DependencyA dependencyA) {
        this.dependencyA = dependencyA;
    }
}
public class Demo {

    private DependencyA dependencyA;
    private DependencyB dependencyB;
    private DependencyC dependencyC;

    // --> Constructor Based DI
//    public Demo(DependencyA dependencyA, DependencyB dependencyB, DependencyC dependencyC){
//        this.dependencyA = dependencyA;
//        this.dependencyB = dependencyB;
//        this.dependencyC = dependencyC;
//    }

    // --> Setter Based DI
    public void setDependencyA(DependencyA dependencyA){
        this.dependencyA = dependencyA;
    }
    public void setDependencyB(DependencyB dependencyB){
        this.dependencyB = dependencyB;
    }
    public void setDependencyC(DependencyC dependencyC){
        this.dependencyC = dependencyC;
    }
}
