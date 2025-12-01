---
layout: page
title: IAF Mehar Baba Prize Competition
description: Swarm drones for long-range, BVLOS search and rescue missions.
img: assets/img/Mehar_Baba.jpeg
importance: 3
category: work
related_publications: true
---

The **Mehar Baba Prize Competition** was a high-stakes initiative by the **Indian Air Force (IAF)** to identify and nurture the development of indigenous swarm drone capabilities for Humanitarian Aid and Disaster Relief (HADR) operations.

As the **Team Lead** of [UAS DTU](https://uasdtu.com/) (a team of 65 researchers at the time), I led the development of a heterogeneous swarm of 25 Unmanned Aerial Vehicles (UAVs) capable of autonomous operations over a range of 50 km. We were one of only five teams selected for the final phase from across India. You can watch the official IAF project video [here](https://www.youtube.com/watch?v=h3QLFirilNo).

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gallery/UAS_DTU_Swarm_In_Air.jpeg" title="Swarm Formation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The whole UAV swarm in operation. 
</div>

### Mission Profile
1. **Long-Range Endurance:** Design UAVs capable of traveling up to 50 km to a target search area, completing the mission, and returning.
2. **Complex Navigation:** Navigate a swarm of at least 25 UAVs to a search area located ~50 km from the takeoff location, handling both **GPS-enabled** and **GPS-denied** environments.
3. **Efficient Search:** Develop an area search algorithm that detects human survivors significantly faster than standard grid search methods.
4. **Payload Delivery:** Detect human survivors and safely drop relief material payloads to their specific locations.
5. **Night Operations:** Ensure the swarm is fully capable of performing operations in low-light and night conditions.

### Key Achievements

* **Scale:** Scaled operations from a single unit to a synchronized swarm of **25 UAVs**.
* **Funding:** Secured **INR 7.5 Crores ($1 Million)** via a comprehensive MoU with **Adani Defence and Aerospace** and built the complete system within this constrained budget.
* **Impact:** Demonstrated a working solution to the Indian Air Force, successfully completing the mission profile. 
* **Innovation:** Developed a custom navigation controller for the UAV swarm {% cite gupta2020swarm %} and an optimized target-search algorithm {% cite gupta2021particle %}.

---

### Personal Contribution

My primary technical contribution focused on the intersection of **multi-agent systems, control dynamics, and path planning**. None of this would have been possible without my wonderful teammates, so a special thanks to Team UAS-DTU.

##### 1. Swarm Navigation & Control
I developed a navigation controller utilizing **consensus equations** to manage waypoint navigation, collision avoidance, and formation control. This ensured that the drones could move as a cohesive unit without colliding, even when scaling up to 25 agents.

##### 2. Optimization Algorithms
For the disaster relief scenario, the swarm needed to identify targets (simulated survivors/supplies) efficiently. I designed an **optimized target-search algorithm** based on the **Particle Swarm Optimization (PSO)** technique. This allowed the UAVs to:
* Communicate findings to neighbors.
* Converge on target clusters in minimum time.
* Ensure rapid response allocation.

##### 3. Human Survivor Detection System
We collected a large dataset using **RGB** (day operation) and **Thermal** (night operations) cameras, labeled the data, and trained a **YOLOv6-tiny** architecture to detect human survivors in the search area.

##### 4. System Integration
Along with my teammates, we built a robust **ROS (Robot Operating System)** pipeline. This acted as the backbone, connecting:
* Low-level flight control (ArduPilot/PX4).
* High-level swarm logic.
* Communication modules for inter-agent data sharing.

---

### Leadership & Management

Transitioning from a technical contributor to the **Team Lead**, my responsibilities shifted towards project management and resource acquisition.

* **Strategic Partnership:** I led negotiations and signed a comprehensive MoU with Adani Defence and Aerospace, securing the critical funding needed to build 25 industrial-grade UAVs.
* **Operations:** Managed a timeline spanning over 18 months, coordinating between software, avionics, and airframe sub-teams.
* **Resilience:** The project involved over **100 hours of flight tests**. We faced numerous crashes and hardware failures. Keeping the team motivated through these setbacks was as crucial as the engineering itself.

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gallery/UAS_DTU_Gaia_on_ground.jpeg" title="Gaia Drone" class="img-fluid rounded z-depth-1 fixed-height-img" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gallery/UAS_DTU_Swarm_on_ground_2.jpeg" title="Full Deployment" class="img-fluid rounded z-depth-1 fixed-height-img" %}
    </div>
</div>
<div class="caption">
    Left: One of the heavy-lift 'Gaia' platforms. Right: The complete formation lined up on the runway ready for the final demonstration.
</div>


<div class="row mt-3">
    <div class="col-sm-12">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1 rounded">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/r5Yi_kZOJro" allowfullscreen></iframe>
        </div>
    </div>
</div>
<div class="caption">
    Demonstration of UAV swarm operations in one of the test missions. 
</div>

### 🏁 The Outcome

After months of rigorous testing and optimization, we deployed the full swarm of 25 UAVs in the final challenge. The system successfully took off, performed the optimal area search, identified targets, and returned to base, validating our consensus algorithms and hardware robustness in a real-world, high-pressure environment.

This project was a defining moment in my engineering journey, teaching me how to bridge the gap between theoretical research and practical, deployable systems.