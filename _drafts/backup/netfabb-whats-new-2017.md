What's New (March 2017)
=======================

New Features and Enhancements
-----------------------------

### Netfabb

1.  **Pins and Holes:** The Pins and Holes feature automatically generates surface pins and holes based on user input while splitting a part into segments during print preparation. The Pins and Holes feature is accessible through the [Cuts](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-672735C4-EE2C-481A-9DC7-B678301C725B) functionality. Available in Netfabb Standard and up.
2.  **Measurement:** The Measurement module and the Measurement snapin were combined into a [new snapin](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-7AD77139-2381-4CE1-9B99-5669B870572D#GUID-7AD77139-2381-4CE1-9B99-5669B870572D). Key features are new and improved measurements for angle and wall thickness. Available in Netfabb Standard and up.
3.  **Part Orientation:** The Part Orientation module analyzes parts and provides several suggestions for their orientation with regards to minima and maxima in *Supported Area*, *Support Volume*, *Outbox Volume* and *Part Height*. This module replaces function Minimize Support which has thus been removed. Find it in the new menu structure under Arrange > Orient Part. Available in Netfabb Standard and up.
4.  **LUA Scripting:** LUA scripting helps improve access to automation tasks. This functionality is only available in Netfabb Ultimate.
5.  **Netproject:** Allows loading projects from and saving them to a web server. Available at tier Premium and up.
6.  **Main Menu:** The [main menu structure](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-F49D4C84-098D-45B9-9AB5-C441BA5C2108) of the default module has had a significant overhaul. New categories with much clearer naming have replaced the generic categories. A number of functions were reorganized, in some cases renamed accordingly, and some have been removed. Most of these changes have also been applied to the context menu. No more digging around in Extras and Extended.
7.  **Reporting:** There is now a `NETFABB_ENGINE_BUILDTIME` variable available for generating reports. This variable is filled with the build time estimate from the currently selected Machine Workspace. In all other cases, or if the selected Machine Workspace does not provide this variable, its value is set to zero.
8.  **New Rapidshape Workspaces:** 24 Rapidshape machines of the C, D, HA and X series join Autodesk Netfabb's array of workspaces. Available from tier Basic up.
9.  **New Prodways Workspace:** With the Promaker P1000, the first Prodways machine is introduced as a selectable workspace. Available from tier Basic up.
10. **New Sinterit Workspace:** The Lisa is Sinterit's first machine to be represented with a workspace in Netfabb. Available from tier Standard up.
11. **New and updated Multi-Head Printing Workspaces:** Support for Collaborative Multi-Head Printing, introduced with the previous release, has been significantly expanded in features. There are also two new workspaces, Titan Prometheus by Titan Robotics, and the Kloner 3D 240 Twin by Kloner 3D.
12. **New and updated FDM Workspaces:** We introduce the ZYYX+ 3D Printer by Magicfirm Europe AB at Standard and up, and expand on the configuration options for FDM printers.
13. **Ember workspace:** Notification for defective part now has correct text.
14. **Slice Commander:** The new feature Hatch Extension draws hatch lines beyond their initially calculated length based on user-definable factors. Existing feature Hatch Conversion had two new functions added, one to enable reversing the direction of hatches based on the layer number increment, and one to randomize the starting point of a contour to minimize artifacts on the printed surface.
15. **Online Help:** The help and learning materials for Autodesk® Netfabb® and each utility contained within the product are now available online.

### Optimization Utility

1.  **Topology Optimization:** Topology optimization has been improved and now includes the ability to [view results in 2D view graphs](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-40CD1154-D018-4C35-9E00-F8FB34C72EC9) and display intermediate 3D results.
2.  **Import and Export:** The import and export of multi-part assemblies via 3MF has been improved.

### Simulation Utility

1.  **Multiple STL File Import:** Instead of running simulations with a single STL file for the part and a common layer interface (CLI) file for the supports, you can import STL files for both part and support structures, with no practical limit on the number of STL files in use. If an STL file represents a support structure, you can specify a volume fraction during import. For support structures from Netfabb or PowerShape, volume fraction is automatically calculated. Quickly orient the different geometries with the new Move dialog. Refer to [File Commands](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-9043D530-DC51-4804-ACE2-60DE1D4CECC1) and [Move](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-902737F0-F1EB-4143-9A5D-AB5CD482C829) for more information.
2.  **Warp Compensation:** The warp compensation feature provides a means of offsetting the distortion that occurs in the manufacturing process. The intention is that during manufacture, the part will warp into the desired shape, or close to it. The warp compensation functionality is a preview technology that is accessible in the Settings dialog. Refer to the [Export Panel](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-E49DEBB1-ADB8-4BFE-855A-367C4509B1C0) section for more information.
3.  **Stress Results:** The stress results functionality allows you to output stress results from the solver for post-processing. Available stress results include Cauchy, von Mises, and Principal stresses. This functionality is a preview technology, accessible in the Settings option on the [Simulation Menu](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-3A84C484-0ADA-4645-9A9E-8C743A11BFE6).
4.  **PRM Database:** PRM database has been expanded to include Cobalt Chrome and Inconel 718 plus. Additionally, the existing Inconel 625 and Inconel 718 PRMs have been updated to as-deposited properties. Please be aware that simulations performed with Inconel 625 and Inconel 718 may produce different results than previous versions.
5.  **Material Library:** Users can add custom materials with a Material Library dialog, specifying material properties in the units defined in the Settings. Refer to [Material Library](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-01E990FD-F52B-4D52-8DCE-10EBCD47ED70) for more information.
6.  **Analysis Setup:** Two key improvements have been made here, both designed to improve the accuracy of simulation results. First, the ambient temperature can be entered, and, as an option, the solver can be set to account for all unmelted powder. Refer to the [Analysis Setup](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-E5815B90-5DBF-48DA-A505-A03476C2522A) section for more information.
7.  **Pre- and Post-Processing:** You now have the ability to control the background color of the display. Clipping plane creation and editing functionality has been improved with the implementation of a new dialog. Refer to [Background color](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-29E441BF-0AE0-46DF-A969-0244CB68A0ED) and [Clipping panel](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-3CAD9DFF-A44D-4CF4-AAFC-05DA9B1BCDAB) for more information.
8.  **PRM Generation:** PRM generation can now be cancelled in the Simulation Job Manager.
9.  **License Manager:** The License Manager allows you to identify licenses currently in use, including those for other Autodesk plug-ins, add-ons, and extensions. You can also borrow a network license and update the licensing type for the Local Solver from within the License Manager.

### PowerShape Utility

1.  **Simulate Parts and Fixtures:** The [Tree](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-2782C6D9-3314-4EE4-8091-E6086540AFA8) and [Column](https://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-C88236E9-A70D-46EC-A521-EB20B9127516) tools in the Fixture panel now contain an option to Simulate Parts and Fixtures. This functionality imports the selected part into the Simulation Utility where you can analyze the thermal stresses acting on the part as a result of the manufacturing process.

### Advanced Toolpath Utility

1.  **New Help Articles:** Toolpath Generation, Geometry processing, Buildstyle Progress and Cancellation
2.  **Multiple File Export Handling:** You can now export multiple files from the Buildstyle Processor.
3.  **3MF Geometry Importer:** Advanced Toolpath Utility now supports importing of 3MF geometries.

Review the [Readme](https://knowledge.autodesk.com/community/article/52301) for a more comprehensive list of new features. Review the [System Requirements](https://knowledge.autodesk.com/support/netfabb/troubleshooting/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Netfabb-2017.html) for more information about the operating system, video, and computing requirements.